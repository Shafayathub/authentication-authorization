import { RequestHandler } from 'express';
import { ReviewServices } from './review.service';
import { JwtPayload } from 'jsonwebtoken';

const createReview: RequestHandler = async (req, res, next) => {
  const user: JwtPayload = req.user;
  try {
    const result = await ReviewServices.createReviewIntoDB(user, req.body);
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
