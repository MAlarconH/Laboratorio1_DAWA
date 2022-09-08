import  express from "express";
import cors from "cors";
import { user } from "./components";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", user);