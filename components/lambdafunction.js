// import AWS from "aws-sdk";
// import dotenv from "dotenv";
// dotenv.config();

// AWS.config.update({
//   region: process.env.AWS_REGION,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// });

// const lambda = new AWS.Lambda();

// export const invokeLambdaFunction = async (image) => {
//   const functionName = process.env.AWS_LAMBDA_FUNCTION;
//   const payload = {
//     image: image,
//   };

//   try {
//     const data = await lambda
//       .invoke({
//         FunctionName: functionName,
//         InvocationType: "RequestResponse", // Use 'RequestResponse' for synchronous invocation
//         Payload: JSON.stringify(payload),
//       })
//       .promise();

//     const lambdaResponse = JSON.parse(data.Payload);

//     if (lambdaResponse && lambdaResponse.ipratio !== undefined) {
//       return lambdaResponse.ipratio;
//     } else {
//       console.error("Lambda function response did not contain 'ipratio'");
//       return null; // Or handle the missing 'ipratio' as needed
//     }
//   } catch (error) {
//     console.error("Error invoking Lambda function:", error);
//     return null; // Or handle the error as needed
//   }
// };
