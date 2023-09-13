import { getObject } from "./aws/aws.js";

export const handleGetImage = async (req, res) => {
  const image = req.body.imageName;

  try {
    const result = await getObject(image);

    if (result) {
      res.status(200).json({ url: result });
    } else {
      res.status(500).json({ message: "Failed to generate Presigned URL" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
