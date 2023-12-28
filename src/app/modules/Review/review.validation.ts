import { z } from 'zod';

const createReviewValidationSchema = z.object({
  courseId: z.string(),
  rating: z.number().gte(1).lte(5),
  review: z.string(),
});

export const ReviewValidations = {
  createReviewValidationSchema,
};
