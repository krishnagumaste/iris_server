// import { getObject } from "./aws/aws.js";
// import { invokeLambdaFunction } from "./lambdafunction.js";
// import { invokePython } from "./invokepython.js";
// import axios from "axios";

// export const getIPRatio = async (image) => {
//   try {
//     const url = await getObject(image);

//     const response = await axios.get(url, { responseType: "arraybuffer" });

//     if (response.status === 200) {
//       const imageBuffer = response.data;
//       const imageBase64 = Buffer.from(imageBuffer).toString("base64");

//       // const lambdaResponse = await invokeLambdaFunction(imageBase64);
//       const lambdaResponse = await invokePython(imageBase64);

//       // Check if lambdaResponse is null and return false in that case
//       if (lambdaResponse === null) {
//         return false;
//       }

//       return lambdaResponse;
//     } else {
//       console.error("Error downloading image. Status code:", response.status);
//       return false; // Or handle the error as needed
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     return false; // Or handle the error as needed
//   }
// };
