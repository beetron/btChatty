import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getFriendList } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/friendlist", protectRoute, getFriendList);

export default router;
