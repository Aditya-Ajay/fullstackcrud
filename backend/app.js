import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import "./model/connection.js";
import { route } from "./route/Userrouting.js";

const app = express();

app.use(express.json()); // to recieve the data from the frontend in the json format

app.use(cors()); // to recieve the information from any origin

app.use(route);

const PORT = process.env.PORT;

// app.get("/hello", (req, res) => {
//   res.send("THE SERVER IS RUNNING ON THE HOME PAGE");
// });

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNNING ON PORT ${PORT}`);
});
