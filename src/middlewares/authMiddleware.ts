import { Request, Response, NextFunction } from "express";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header("Authorization");

  // Mock token validation logic
  if (token === "my-secret-token") {
    next(); // pass control to the next middleware function
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
