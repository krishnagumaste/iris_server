// import { spawn } from "child_process";

// export const invokePython = (imageBase64) => {
//   return new Promise((resolve, reject) => {
//     const python_process = spawn("python", [
//       "./model/lambda_function.py",
//       imageBase64,
//     ]);

//     let output_data = "";

//     python_process.stdout.on("data", (data) => {
//       output_data += data.toString();
//     });

//     python_process.on("error", (err) => {
//       reject(err);
//     });

//     python_process.on("close", (code) => {
//       if (code === 0) {
//         try {
//           const result = JSON.parse(output_data);
//           resolve(result);
//         } catch (err) {
//           reject(err);
//         }
//       } else {
//         reject(new Error(`Python process exited with code ${code}`));
//       }
//     });
//   });
// };
