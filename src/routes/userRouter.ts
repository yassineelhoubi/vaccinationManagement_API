import { getUser } from "@controllers/userController";
import express from "express";
const router = express.Router();

router.get("/getUser", getUser);

export { router };