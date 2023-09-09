import express from "express";
import bodyParser from "body-parser";
import { handleTest } from "./components/test.js";
import { handleLoginEmail, handleLoginPhone } from "./components/login.js";
import {
  handleSignup,
  handleVerifyotp,
  handleVerifyToken,
} from "./components/signup.js";
import { handleUpload } from "./components/upload.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login/email", handleLoginEmail);

app.post("/login/phoneNumber", handleLoginPhone);

app.post("/signup", handleSignup);

app.post("/verifyotp", handleVerifyToken, handleVerifyotp);

app.post("/upload", handleUpload);

app.get("/test", handleTest);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
