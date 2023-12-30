import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { Course } from '../Course/cousre.model';
import { TReview } from './review.interface';
import { Review } from './review.model';
import { JwtPayload } from 'jsonwebtoken';

const createReviewIntoDB = async (user: JwtPayload, payload: TReview) => {
  const { _id } = user;
  const { courseId } = payload;
  const isCourseExist = await Course.findById(courseId);
  const newReview = { createdBy: _id, ...payload };
  if (isCourseExist) {
    const result = await Review.create(newReview);
    return result;
  } else {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `${courseId} is not a valid ID!`,
      'Invalid ID',
    );
  }
};

export const ReviewServices = {
  createReviewIntoDB,
};
