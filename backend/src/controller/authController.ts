import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import asyncHandler from "../utils/catchAsync";
import UserModel from "../models/userSchema";
import * as jwt from "jsonwebtoken";

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  const expireTime: number = parseInt(process.env.JWT_COOKIE_EXPIRES_IN);
  console.log(expireTime);
  console.log(token);

  const cookieOption = {
    expires: new Date(Date.now() + expireTime * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
    // signed: true,
  };
  res.cookie("jwt", token, cookieOption);

  user.password = undefined;
  user.cpassword = undefined;

  res.setHeader("Authorization", `Bearer ${token}`);
  res.status(200).json({ success: true, data: user, jwt_token: token });
});

export const test = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ success: true });
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

export const checkUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization;
    console.log(token);

    if (!token) {
      return res.status(200).json({
        isAuthorized: false,
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as {
      userId: string;
    };
    console.log(decoded.userId);
    const checkUser = await UserModel.findById({ _id: decoded.userId });
    // console.log(checkUser);
    if (!checkUser) {
      return res.status(401).json({
        isAuthorized: false,
      });
    }
    res.status(200).json({
      isAuthorized: true,
    });
  } catch (error) {
    console.log(error);
  }
});
