import { NextFunction, Response } from "express";

class ErrorHanlder {
  errorHanlder(err, res: Response, next: NextFunction) {
    const {statusCode, message} = err;
    res.status(statusCode).json({
      error: "Not Found",
      message: message,
      status: statusCode,
      timestamp: Date.now(),
    });
    next();
  }
}

export default ErrorHanlder;
