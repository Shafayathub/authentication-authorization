import { Date } from 'mongoose';

export type TUser = {
  username: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
  createdAt?: Date;
  updatedAt?: Date;
};
