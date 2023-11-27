import { Request, Response, NextFunction } from "express";
import asyncHandler from "../utils/catchAsync";
import UserModel from "../models/userSchema";

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(500).json({
      success: false,
      message: "User Not Exist !",
    });
  }

  res.status(200).json({ email, password });
});

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword) {
    return res
      .status(500)
      .json({ message: "Fill All Details!", success: false });
  }
  const checkUser = await UserModel.findOne({ email });
  if (checkUser) {
    return res.status(500).json({
      success: false,
      message: "User Already Exist !",
    });
  }
  try {
    const user = new UserModel({ name, email, password, cpassword });
    await user.save();
    return res
      .status(200)
      .json({ message: "Registration Done!", success: true, user: user });
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
});
