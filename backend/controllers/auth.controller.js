import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utility/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword } = req.body;

    if (password != confirmPassword) {
      return res.status(400).json({ error: "Password mismatch" });
    }

    // Check if username is taken
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username is taken" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Avatar placeholder

    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    // const femaleProfilePic =
    //   "https://avatar.iran.liara.run/public/girl?username=${username}";

    const newUser = new User({
      fullName: fullName,
      username: username,
      password: hashedPassword,
      profilePhoto: maleProfilePic,
    });

    if (newUser) {
      // generate JWT token
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullname,
        username: newUser.username,
        profilePhoto: newUser.profilePhoto,
      });
    }
  } catch (error) {
    console.log("Error during signup", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  res.send("login");
  console.log("login");
};

export const logout = (req, res) => {
  res.send("logout");
  console.log("logout");
};
