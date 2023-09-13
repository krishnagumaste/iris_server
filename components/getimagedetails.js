import { getImageDetails } from "./database.js";

export const handleGetImageDetails = async (req, res) => {
  const user_id = req.body.user_id;

  try {
    const result = await getImageDetails(user_id);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
