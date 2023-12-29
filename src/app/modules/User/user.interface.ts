import { Date, Types } from 'mongoose';
import { UserRole } from './user.constant';

export type TUser = {
  _id?: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
  createdAt?: Date;
  updatedAt?: Date;
};

export type TUserRole = keyof typeof UserRole;
