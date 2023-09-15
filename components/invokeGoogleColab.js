// const axios = require("axios");

// export const invokeGoogleColab = async (imageBase64) => {
//   try {
//     // Define the API endpoint URL
//     const apiUrl = "http://your-colab-server-url:5000/detect_iris_pupil_ratio"; // Replace with your Colab API URL

//     // Send the imageBase64 to the Colab server
//     const response = await axios.post(apiUrl, { image: imageBase64 });

//     // Handle the API response
//     const irisPupilRatio = response.data.Iris_to_Pupil_Ratio;
//     return irisPupilRatio;
//   } catch (error) {
//     console.error("Error:", error.message);
//     throw error; // Rethrow the error to handle it further if needed
//   }
// };

// // Example usage:
// const imageBase64 = "your-base64-encoded-image-data"; // Replace with your image data
// invokeGoogleColab(imageBase64)
//   .then((irisPupilRatio) => {
//     console.log("Iris-to-Pupil Ratio:", irisPupilRatio);
//   })
//   .catch((error) => {
//     // Handle errors if needed
//   });
