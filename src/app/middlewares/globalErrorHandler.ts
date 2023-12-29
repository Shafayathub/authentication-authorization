import { ErrorRequestHandler } from 'express';
import httpStatus from 'http-status';
import config from '../config';
import { ZodError } from 'zod';
import handleZodError from '../errors/handleZodError';
import AppError from '../errors/appError';
import handleCastError from '../errors/handleCastError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const globalErrorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  let statusCode: number = 500;
  let message: string = 'Something went worng';
  let errorMessage: string = 'Somthing went worng';

  if (err?.code === 11000) {
    statusCode = httpStatus.BAD_REQUEST;
    message = 'Duplicate Entry';
    errorMessage = err?.message;
  } else if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = httpStatus.BAD_REQUEST;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessage;
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err);
    statusCode = httpStatus.BAD_REQUEST;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessage;
  } else if (err instanceof AppError) {
    statusCode = httpStatus.BAD_REQUEST;
    message = err.message;
    errorMessage = err.errorMessage;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    errorDetails: config.node_env === 'development' ? err : null,
    stack: config.node_env === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
