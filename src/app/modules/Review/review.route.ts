import express from 'express';
import { ReviewControllers } from './review.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidations } from './review.validation';
import auth from '../../middlewares/auth';
import { UserRole } from '../User/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.admin),
  validateRequest(ReviewValidations.createReviewValidationSchema),
  ReviewControllers.createReview,
);

export const ReviewRoutes = router;
