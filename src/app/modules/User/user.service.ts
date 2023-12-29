import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const { username } = payload;
  const isUserExists = await User.findOne({ username });
  if (isUserExists) {
    throw new AppError(
      httpStatus.ALREADY_REPORTED,
      'User already exists!',
      'create user with another username and email',
    );
  }
  const result = await User.create(payload);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
