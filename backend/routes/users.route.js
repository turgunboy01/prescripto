import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSitebar } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSitebar);

export default router;
