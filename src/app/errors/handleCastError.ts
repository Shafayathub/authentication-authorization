import mongoose from 'mongoose';
import { TErrorResponse } from '../interface/error';
import httpStatus from 'http-status';

const handleCastError = (err: mongoose.Error.CastError): TErrorResponse => {
  const errorSources = [err];
  const errorMessage = errorSources.map((e) => {
    return `${e.value} is not a valid ID!.`;
  });

  const statusCode = httpStatus.BAD_REQUEST;

  return {
    statusCode,
    message: 'Invalid ID',
    errorMessage: errorMessage.toString(),
  };
};

export default handleCastError;
