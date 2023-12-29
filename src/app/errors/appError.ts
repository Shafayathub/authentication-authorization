class AppError extends Error {
  public errorMessage: string;
  public statusCode: number;

  constructor(statusCode: number, errorMessage: string, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
  }
}
export default AppError;
