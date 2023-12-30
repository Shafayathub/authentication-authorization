import { z } from 'zod';

const createCategoryValidationSchema = z.object({
  name: z.string(),
  createdBy: z.string().optional(),
});

export const categoryValidations = {
  createCategoryValidationSchema,
};
