import { RequestHandler } from 'express';
import { AuthServices } from './auth.service';

const userLogin: RequestHandler = async (req, res, next) => {
  try {
    const result = await AuthServices.loginExistingUser(req.body);

    res.status(200).json({
      success: true,
      message: 'User login successful',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthControllers = {
  userLogin,
};
