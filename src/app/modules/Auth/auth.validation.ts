import { z } from 'zod';

const userLoginValidationSchema = z.object({
  username: z.string({ required_error: 'username is required!' }),
  password: z.string({ required_error: 'Please enter your password!' }),
});

export const userLoginValidations = {
  userLoginValidationSchema,
};
