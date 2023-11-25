import { Request, Response, NextFunction } from "express";
import asyncHandler from "../utils/catchAsync";

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.status(200).json({ email, password });
});
