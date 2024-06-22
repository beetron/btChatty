import User from "../models/user.model.js";

// Get user friend list
export const getFriendList = async (req, res) => {
  try {
    const userId = req.user._id;

    // Find user object
    const user = await User.findById(userId);

    // Throw error if user not found
    if (!user) {
      return res.status(404).json({ error: "Error in user controller" });
    }

    // Get friend list
    const friendList = await User.find({
      _id: { $in: user.friendList },
    });

    // Return empty array if friendList is empty
    if (!friendList) {
      return res.status(200).json([]);
    }

    res.status(200).json(friendList);
  } catch (error) {
    console.log("Error in getFriendList controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get pending user friend requests
export const getFriendRequests = async (req, res) => {
  try {
    const userId = req.user._id;

    // Find user object
    const user = await User.findById(userId);

    // Throw error if user not found
    if (!user) {
      return res.status(404).json({ error: "Error in user controller" });
    }

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
    const requesterId = req.user._id;

    // Find requesting user
    const requester = await User.findById(requesterId);

    // Throw error if requesting user not found
    if (!requester) {
      console.log({ error: "Requesting user not found" });
      return res.status(404).json({ error: "Error in user controller" });
    }

    // Retrieve uniqueId from request params
    const { uniqueId } = req.params;

    // Find user being friend requested
    const requestReceiver = await User.findOne({ uniqueId });

    // Check if the uniqueId to add exists
    if (!requestReceiver) {
      console.log({ error: "User not found" });
      return res.status(400).json({ error: "User not found" });
    }

    // Check if user is already pending add request
    if (requestReceiver.friendRequests.includes(requester._id)) {
      console.log({ error: "Friend request already sent" });
      return res.status(400).json({ error: "Friend request already sent" });
    }

    requestReceiver.friendRequests.push(requesterId);
    await requestReceiver.save();

    res.status(201).json({ message: "Friend request sent" });
  } catch (error) {
    console.log("Error in addFriendRequeset controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
