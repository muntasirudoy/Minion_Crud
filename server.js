import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dbConnection from "./config/dbConnection.js";
import miniosRouter from "./routes/miniosRouter.js";

const app = express();
dbConnection();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/minions", miniosRouter);

app.listen(8000, () => {
  console.log("Server Connect");
});
