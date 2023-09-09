import { getDataEmail, getDataPhone } from "./database.js";

export const handleLoginEmail = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await getDataEmail(email, password);

    if (result && result.length > 0) {
      res
        .status(200)
        .json({ message: "Authorized", user_id: result[0].user_id });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const handleLoginPhone = async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    const result = await getDataPhone(phoneNumber, password);

    if (result && result.length > 0) {
      res
        .status(200)
        .json({ message: "Authorized", user_id: result[0].user_id });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
