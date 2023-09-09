import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import { checkUser, addUser } from "./database.js";
import { sendOTP, verifyOTP } from "./twilio.js";
dotenv.config();

const jwtSecretKey = process.env.JWT_SECRET_KEY;

export const handleSignup = async (req, res) => {
  const result = await checkUser(req.body.email, req.body.phoneNumber);

  if (result) {
    res.status(409).json({ message: "Email or phone number already exists." });
    return;
  }

  const { username, email, phoneNumber, password } = req.body;

  const token = jwt.sign(
    { username, email, phoneNumber, password },
    jwtSecretKey
  );

  try {
    const result = await sendOTP(phoneNumber);
    res.status(200).json({
      token: token,
      verification_sid: result,
      message: "OTP sent to Phone Number Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to send OTP to the Phone Number",
    });
  }
};

export const handleVerifyotp = async (req, res) => {
  const { otp } = req.body;

  try {
    const { username, email, phoneNumber, password } = req.decoded;

    const result = await verifyOTP(phoneNumber, otp);

    if (result) {
      const user_id = uuidv4().toString("hex");
      console.log(user_id);
      const inserted = await addUser(
        user_id,
        username,
        email,
        phoneNumber,
        password
      );
      console.log(inserted);

      if (inserted) {
        res.status(200).json({
          result: true,
          user_id: user_id,
          message: "User inserted successfully",
        });
      } else {
        res.status(500).json({
          result: false,
          message: "User insertion failed",
        });
      }
    } else {
      res.status(401).json({
        result: result,
        message: "Unauthorized",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      result: false,
      message: "Something broke!",
    });
  }
};

export const handleVerifyToken = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  jwt.verify(token, jwtSecretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Unauthorized" });
    }
    req.decoded = decoded;
    next();
  });
};
