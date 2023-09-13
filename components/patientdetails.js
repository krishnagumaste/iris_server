import { addPatient } from "./database.js";

export const handlePatientDetails = async (req, res) => {
  const { user_id, name, age, currDate, imageName } = req.body;

  try {
    const result = await addPatient(user_id, name, age, currDate, imageName);

    if (result) {
      res.status(200).json({ message: "Patient details added successfully" });
    } else {
      res.status(400).json({ message: "Failed to add patient details" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
