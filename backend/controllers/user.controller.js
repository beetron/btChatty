import User from "../models/user.model.js";

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
