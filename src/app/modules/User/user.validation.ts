import { z } from 'zod';

const userValidationSchema = z.object({
  username: z.string(),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Must be 6 or more characters long' }),
  role: z.enum(['user', 'admin']).optional(),
});

export const UserValidations = {
  userValidationSchema,
};
