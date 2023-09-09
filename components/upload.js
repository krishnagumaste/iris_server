import { putObject } from "./aws/aws.js";

export const handleUpload = async (req, res) => {
  const filename = req.body.filename;
  try {
    const result = await putObject(filename, "/image/jpeg");

    if (result) {
      res.status(200).json({ url: result });
    } else {
      res.status(500).json({ message: "Failed to generate Presigned URL" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
