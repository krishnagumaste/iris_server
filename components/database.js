import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export const getDataEmail = async (email, password) => {
  try {
    const [row] = await pool.query(
      `SELECT user_id FROM users 
              where email = ? and 
              password = ?`,
      [email, password]
    );

    return row;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getDataPhone = async (phoneNumber, password) => {
  try {
    const [row] = await pool.query(
      `SELECT user_id FROM users 
      where phoneNumber = ? and 
      password = ?`,
      [phoneNumber, password]
    );

    return row;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const addUser = async (
  user_id,
  username,
  email,
  phoneNumber,
  password
) => {
  try {
    const result = await pool.query(
      `INSERT INTO users (user_id, username, email, phoneNumber, password) VALUES (?, ?, ?, ?, ?)`,
      [user_id, username, email, phoneNumber, password]
    );
    console.log("User added successfully");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const checkUser = async (email, phoneNumber) => {
  try {
    const [row] = await pool.query(
      `SELECT * FROM users
      WHERE email = ? OR phoneNumber = ?`,
      [email, phoneNumber]
    );

    if (row.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const addPatient = async (
  user_id,
  name,
  age,
  currDate,
  imageName,
  imageId
) => {
  try {
    const ageInt = parseInt(age, 10);
    const dateObj = new Date(currDate);

    const result = await pool.query(
      `INSERT INTO image_and_details (user_id, name, age, currDate, imageName, imageId) VALUES (?, ?, ?, ?, ?, ?)`,
      [user_id, name, ageInt, dateObj, imageName, imageId]
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const addIPRatio = async (imageName, ipratio) => {
  try {
    const result = await pool.query(
      `INSERT INTO ip_ratio (imageName, ipratio) VALUES (?, ?)`,
      [imageName, ipratio]
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getImageDetails = async (user_id) => {
  try {
    const [result] = await pool.query(
      `select i.* , id.name, id.age, id.currDate, id.imageId from ip_ratio i inner join image_and_details id on id.imageName=i.imageName inner join users u on u.user_id = ?;`,
      [user_id]
    );
    if (result && result.length > 0) {
      return result;
    } else {
      return {
        message: "Couldn't get the image details for the user",
      };
    }
  } catch (error) {
    console.log(error);
    return { message: "Couldn't get the image details for the user" };
  }
};
