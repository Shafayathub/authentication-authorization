import { Date, Types } from 'mongoose';

export type TUser = {
  _id?: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
  createdAt?: Date;
  updatedAt?: Date;
};
