import jwt, { JwtPayload } from 'jsonwebtoken';
import AppError from '../../errors/appError';
import { User } from '../User/user.model';
import { TUserLogin } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { TUser } from '../User/user.interface';
import httpStatus from 'http-status';
import { PasswordHistory } from '../User/passwordHistory/passwordHistory.model';

const loginExistingUser = async (payload: TUserLogin) => {
  const isUserExist: TUser = await User.findOne({
    username: payload.username,
  }).select('+password');

  if (!isUserExist) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      'This user does not exist!',
      'Unauthorized access request!',
    );
  }
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    isUserExist.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(
      httpStatus.UNAVAILABLE_FOR_LEGAL_REASONS,
      'You do not have the necessary permissions to access this resource.',
      'Unauthorized Access',
    );
  }

  const jwtPayload = {
    _id: isUserExist._id,
    role: isUserExist.role,
    email: isUserExist.email,
  };

  const secret = config.jwt_access_secret as string;

  const accessToken = jwt.sign(jwtPayload, secret, {
    expiresIn: '10d',
  });
  const user = {
    _id: isUserExist?._id,
    username: isUserExist?.username,
    email: isUserExist?.email,
    role: isUserExist?.role,
  };
  return { user, token: accessToken };
};

const changePasswordFromDB = async (
  user: JwtPayload,
  payload: { currentPassword: string; newPassword: string },
) => {
  const { _id } = user;

  const userWhoOwnsThePass = await User.findById(_id).select('+password');

  const usersPassword = userWhoOwnsThePass?.password as string;

  const checkCurrentPassword = await bcrypt.compare(
    payload.currentPassword,
    usersPassword,
  );
  const hasPasswordHistory = await PasswordHistory.findOne({ userId: _id });
  let passwordHistory = hasPasswordHistory?.passwordHistory || [];

  if (checkCurrentPassword) {
    passwordHistory.unshift(usersPassword);
    passwordHistory = passwordHistory.slice(0, 3);
  }

  const passwordHistoryDB = await PasswordHistory.findOneAndUpdate(
    { userId: _id },
    {
      userId: _id,
      passwordHistory,
    },
    {
      upsert: true,
      timestamps: true,
    },
  );

  const passwordFromPasswordHistoryDB =
    passwordHistoryDB?.passwordHistory as string[];

  for (const e of passwordFromPasswordHistoryDB) {
    const test = await bcrypt.compare(payload?.newPassword, e);
    if (test) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        '',
        'Password change failed. Ensure the new password is unique and not among the last 2 used.',
      );
    }
  }
  const newPasswordHash = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds),
  );

  const result = await User.findByIdAndUpdate(
    _id,
    {
      password: newPasswordHash,
    },
    {
      timestamps: true,
      new: true,
    },
  );

  return result;
};

export const AuthServices = {
  loginExistingUser,
  changePasswordFromDB,
};
