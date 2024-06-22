import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getFriendList } from "../controllers/user.controller.js";
import { getFriendRequests } from "../controllers/user.controller.js";
import { addFriendRequest } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/friendlist", protectRoute, getFriendList);
router.get("/friendrequests", protectRoute, getFriendRequests);
router.put("/addfriend/:uniqueId", protectRoute, addFriendRequest);

export default router;
