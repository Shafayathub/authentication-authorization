import jwt from 'jsonwebtoken';
import AppError from '../../errors/appError';
import { User } from '../User/user.model';
import { TUserLogin } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { TUser } from '../User/user.interface';
import httpStatus from 'http-status';

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

  const accessToken = jwt.sign(
    {
      data: jwtPayload,
    },
    secret,
    {
      expiresIn: '10d',
    },
  );
  const user = {
    _id: isUserExist?._id,
    username: isUserExist?.username,
    email: isUserExist?.email,
    role: isUserExist?.role,
  };
  return { user, token: accessToken };
};

export const AuthServices = {
  loginExistingUser,
};
