class AppError extends Error {
  public errorMessage: string;

  constructor(errorMessage: string, message: string, stack = '') {
    super(message);
    this.errorMessage = errorMessage;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export default AppError;
