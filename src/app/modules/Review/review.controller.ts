import { RequestHandler } from 'express';
import { ReviewServices } from './review.service';

const createReview: RequestHandler = async (req, res, next) => {
  try {
    const result = await ReviewServices.createReviewIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: 'Review created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const ReviewControllers = {
  createReview,
};
