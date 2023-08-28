import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import database from "./services/database";

dotenv.config();
const server = express();
const port = process.env.PORT;
const origin = process.env.KNOWN_ORIGINS?.split(",");

server.use(express.json());
server.use(cors({ origin }));

database.$connect((err) =>
  server.listen(port, () => console.log(`server running on ${port}`))
);
