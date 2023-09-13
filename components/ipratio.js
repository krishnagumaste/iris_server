import { addIPRatio } from "./database.js";

export const handleIPRatio = async (req, res) => {
  const image = req.body.image;
  const ipratio = 1;
  try {
    const result = await addIPRatio(image, ipratio);

    if (result) {
      res.status(200).json({ message: "IP Ratio added successfully" });
    } else {
      res.status(400).json({ message: "Failed to add IP Ratio" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
