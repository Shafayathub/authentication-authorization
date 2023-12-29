import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/appError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/User/user.interface';

const auth = (...authRoles: TUserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      //   token checking
      const token = req.headers.authorization;
      if (!token) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          'You do not have the necessary permissions to access this resource.',
          'Unauthorized Access',
        );
      }

      //   verification
      jwt.verify(
        token,
        config.jwt_access_secret as string,
        function (err, decoded) {
          if (err) {
            throw new AppError(
              httpStatus.UNAUTHORIZED,
              'You do not have the necessary permissions to access this resource.',
              'Unauthorized Access',
            );
          }

          const role = (decoded as JwtPayload).role;

          if (authRoles && !authRoles.includes(role)) {
            throw new AppError(
              httpStatus.UNAUTHORIZED,
              'admin roler problem.',
              'Unauthorized Access',
            );
          }
          //   decoded
          req.user = decoded as JwtPayload;
          next();
        },
      );
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
