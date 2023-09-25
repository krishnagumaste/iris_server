import { addIPRatio } from "./database.js";
// import { getIPRatio } from "./getipratio.js";

export const handleIPRatio = async (req, res) => {
  const image = req.body.image;
  const luxValue = req.body.luxValue;
  // const ipratio = await getIPRatio(image);
  const ipratio = "1";
  if (ipratio === false) {
    res.status(400).json({ message: "Failed to get the IP Ratio" });
  }
  try {
    const result = await addIPRatio(image, ipratio, luxValue);

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
