import AppError from '../../errors/appError';
import { Course } from '../Course/cousre.model';
import { TReview } from './review.interface';
import { Review } from './review.model';

const createReviewIntoDB = async (payload: TReview) => {
  const { courseId } = payload;
  const isCourseExist = await Course.findById(courseId);
  if (isCourseExist) {
    const result = await Review.create(payload);
    return result;
  } else {
    throw new AppError(`${courseId} is not a valid ID!`, 'Invalid ID');
  }
};

export const ReviewServices = {
  createReviewIntoDB,
};
