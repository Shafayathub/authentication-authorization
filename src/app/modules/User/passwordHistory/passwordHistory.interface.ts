import { Types } from 'mongoose';

export type TPasswordHistory = {
  userId: Types.ObjectId;
  passwordHistory: string[];
};
