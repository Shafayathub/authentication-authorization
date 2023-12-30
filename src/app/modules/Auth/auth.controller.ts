import { RequestHandler } from 'express';
import { AuthServices } from './auth.service';
import { JwtPayload } from 'jsonwebtoken';

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

const changePassword: RequestHandler = async (req, res, next) => {
  const user: JwtPayload = req.user;
  const { ...passwordData } = req.body;
  try {
    const result = await AuthServices.changePasswordFromDB(user, passwordData);

    res.status(200).json({
      success: true,
      message: 'Password changed successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthControllers = {
  userLogin,
  changePassword,
};
