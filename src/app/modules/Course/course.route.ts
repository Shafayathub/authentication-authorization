import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseControllers } from './course.controller';
import { CourseValidations } from './course.validation';
import auth from '../../middlewares/auth';
import { UserRole } from '../User/user.constant';

const router = express.Router();

router.post(
  '/course',
  auth(UserRole.admin),
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get(
  '/courses',
  auth(UserRole.admin, UserRole.user),
  CourseControllers.getAllCourses,
);

router.get(
  '/courses/:courseId/reviews',
  auth(UserRole.admin, UserRole.user),
  CourseControllers.getAllReviewsWithSingleCourse,
);

router.get(
  '/course/best',
  auth(UserRole.admin, UserRole.user),
  CourseControllers.getTheBestCourse,
);

router.put(
  '/courses/:courseId',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateSingleCourse,
);

export const CourseRoutes = router;
