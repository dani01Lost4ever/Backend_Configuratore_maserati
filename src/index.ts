import socket from "socket.io";

require("dotenv").config();
import "reflect-metadata";
import app from "./app";
import { server, io } from "./app";
import mongoose from "mongoose";
mongoose.set("debug", true);
mongoose
  .connect(process.env.MONGO_DB_URI_DANIEL || "")
  .then((_) => {
    console.info("Connected to db");
      server.listen(3000, () => {
      console.info("Server listening on port 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });


