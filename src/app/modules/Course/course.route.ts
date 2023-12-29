import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseControllers } from './course.controller';
import { CourseValidations } from './course.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/course',
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/courses', auth(), CourseControllers.getAllCourses);

router.get(
  '/courses/:courseId/reviews',
  CourseControllers.getAllReviewsWithSingleCourse,
);

router.get('/course/best', CourseControllers.getTheBestCourse);

router.put(
  '/courses/:courseId',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateSingleCourse,
);

export const CourseRoutes = router;
