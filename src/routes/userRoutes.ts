import express from "express";
import { authenticate } from "../middlewares/authMiddleware";
import {
  listUsers,
} from "../controllers/userController";

const router = express.Router();


// list all users
router.get("/", authenticate, listUsers);



export default router;
