import User from "../models/user.model.js";

// Get user friend list
export const getFriendList = async (req, res) => {
  try {
    const user = req.user;
    // Get friend list
    const friendList = user.friendList;

    // Return empty array if friendList is empty
    if (!friendList) {
      return res.status(200).json([]);
    }

    // Get user data based off of objectIdFriendList
    const friendListData = await User.find({
      _id: { $in: friendList },
    }).select("-password");
    res.status(200).json(friendListData);
  } catch (error) {
    console.log("Error in getFriendList controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Block user
// export const blockUser = async (req, res) => {};

// Get pending user friend requests
export const getFriendRequests = async (req, res) => {
  try {
    const user = req.user;

    // Get friend requests
    const friendRequests = user.friendRequests;
    res.status(200).json(friendRequests);
  } catch (error) {
    console.log("Error in getFriendRequests controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add friend request
export const addFriendRequest = async (req, res) => {
  try {
    const user = req.user;

    // Retrieve uniqueId from request params
    const { uniqueId } = req.params;

    // Find user being friend requested
    const requestReceiver = await User.findOne({ uniqueId });

    // Check if the uniqueId to add exists
    if (!requestReceiver) {
      console.log({ error: "User not found" });
      return res.status(400).json({ error: "User not found" });
    }

    // Check if user it not adding itself
    if (requestReceiver._id.equals(user._id)) {
      console.log({ error: "Cannot add yourself" });
      return res.status(400).json({ error: "Cannot add yourself" });
    }

    // Check if user is already pending add request
    if (requestReceiver.friendRequests.includes(user._id)) {
      console.log({ error: "Friend request already sent" });
      return res.status(400).json({ error: "Friend request already sent" });
    }

    requestReceiver.friendRequests.push(user._id);
    await requestReceiver.save();

    res.status(201).json({ message: "Friend request sent" });
  } catch (error) {
    console.log("Error in addFriendRequeset controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
