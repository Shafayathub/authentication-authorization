import { z } from 'zod';

const createTagsValidationSchema = z.object({
  name: z.string(),
  isDeleted: z.boolean(),
});

const createDetailsValidationSchema = z.object({
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  description: z.string(),
});

const createCourseValidationSchema = z.object({
  title: z.string(),
  instructor: z.string(),
  categoryId: z.string(),
  price: z.number(),
  tags: z.array(createTagsValidationSchema),
  startDate: z.string(),
  endDate: z.string(),
  language: z.string(),
  provider: z.string(),
  durationInWeeks: z.number().int().optional(),
  details: createDetailsValidationSchema,
});

const updateTagsValidationSchema = z.object({
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
  description: z.string().optional(),
});

const updateDetailsValidationSchema = z.object({
  level: z.string().optional(),
  description: z.string().optional(),
});

const updateCourseValidationSchema = z.object({
  title: z.string().optional(),
  instructor: z.string().optional(),
  categoryId: z.string().optional(),
  price: z.number().optional(),
  tags: z.array(updateTagsValidationSchema).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  language: z.string().optional(),
  provider: z.string().optional(),
  durationInWeeks: z.number().int().optional().optional(),
  details: updateDetailsValidationSchema.optional(),
});

export const CourseValidations = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
};
