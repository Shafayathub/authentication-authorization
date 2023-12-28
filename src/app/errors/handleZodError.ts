import { ZodError, ZodIssue } from 'zod';
import { TErrorResponse, TErrorSources } from '../interface/error';
import httpStatus from 'http-status';

const handleZodError = (err: ZodError): TErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path?.[issue?.path?.length - 1],
      message: issue?.message,
    };
  });

  const errorMessage = errorSources.map((e) => {
    return `${e.path} is ${e.message}`;
  });

  const statusCode = httpStatus.BAD_REQUEST;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errorMessage.toString(),
  };
};

export default handleZodError;
