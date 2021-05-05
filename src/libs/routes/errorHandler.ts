import { NextFunction, Response } from "express";

class ErrorHanlder {
  errorHanlder=(statusCode: number, errorMessage: string)=> {
 (res: any, next: any)=>{
    res.status(statusCode).json({
      error: "Not Found",
      message: errorMessage,
      status: statusCode,
      timestamp: Date.now(),
    });
    next();
  }
  }
}

export default ErrorHanlder;
