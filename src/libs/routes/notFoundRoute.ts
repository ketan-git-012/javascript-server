import { NextFunction, Response } from "express";

class NotFoundRoute {
  NotFound(res: Response, next: NextFunction) {
    res.status(404).json({
      error: "Not Found",
    });
    next();
  }
}

export default NotFoundRoute;
