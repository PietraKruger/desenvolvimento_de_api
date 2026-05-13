export class AppError extends Error {
  constructor(message, status_code = 500, details) {
    this.name = "AppError";
    this.status_code = status_code;
    this.isOperational = true;
    this.details = details;
    this.message = message;
  }
}
