import express from 'express';
export const route = express.Router();
import { getAllUsers, getUserByID} from "../controllers/user-controller.js"


route.get("/", getAllUsers);

route.get("/:id", getUserByID);