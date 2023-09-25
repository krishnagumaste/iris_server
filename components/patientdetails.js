import { addPatient } from "./database.js";
import axios from "axios";

export const handlePatientDetails = async (req, res) => {
  const { user_id, name, age, currDate, imageName, imageId, luxValue } =
    req.body;

  try {
    const result = await addPatient(
      user_id,
      name,
      age,
      currDate,
      imageName,
      imageId
    );

    if (result) {
      await axios
        .post("http://43.205.235.49/api/ipratio", {
          image: imageName,
          luxValue: luxValue,
        })
        .then((response) => {
          res.status(200).json({
            message: "Patient details added successfully",
            response: response.data,
          });
        })
        .catch((error) => {
          res
            .status(400)
            .json({ message: "Failed to add ip ratio", error: error.data }); //maybe in future i need to handle this
        });
    } else {
      res.status(400).json({ message: "Failed to add patient details" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
