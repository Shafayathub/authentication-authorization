import { z } from 'zod';

const createReviewValidationSchema = z.object({
  courseId: z.string(),
  rating: z
    .number()
    .gte(1, { message: 'atleast 1 should be given for the efforts' })
    .lte(5, {
      message:
        'Relax 5 means the course is one of the best courses you have ever enrolled!',
    }),
  review: z.string(),
  createdBy: z.string().optional(),
});

export const ReviewValidations = {
  createReviewValidationSchema,
};
