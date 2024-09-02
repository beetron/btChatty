import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  getFriendList,
  getFriendRequests,
  addFriendRequest,
  acceptFriendRequest,
  denyFriendRequest,
  removeFriend,
  updateNickname,
  updateUniqueId,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/friendlist", protectRoute, getFriendList);
router.get("/friendrequests", protectRoute, getFriendRequests);
router.put("/addfriend/:uniqueId", protectRoute, addFriendRequest);
router.put("/acceptfriend/:uniqueId", protectRoute, acceptFriendRequest);
router.put("/denyfriend/:uniqueId", protectRoute, denyFriendRequest);
router.put("/removefriend/:uniqueId", protectRoute, removeFriend);
router.put("/updatenickname/:nickname", protectRoute, updateNickname);
router.put("/updateuniqueid/:uniqueId", protectRoute, updateUniqueId);

export default router;
