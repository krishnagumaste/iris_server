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
import { handleLambda } from "./components/lambda.js";
import dotenv from "dotenv";
import { handlePatientDetails } from "./components/patientdetails.js";
import { handleIPRatio } from "./components/ipratio.js";
import { handleGetImageDetails } from "./components/getimagedetails.js";
import { handleGetImage } from "./components/getimage.js";
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

app.post("/patientdetails", handlePatientDetails);

app.post("/lambda", handleLambda);

app.post("/ipratio", handleIPRatio);

app.post("/getimagedetails", handleGetImageDetails);

app.post("/getimage", handleGetImage);

app.get("/test", handleTest);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
