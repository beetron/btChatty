import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utility/generateToken.js";

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword } = req.body;

    // Check if user chosen passwords match
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

// LOGIN
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

    // search for username
    const user = await User.findOne({ username });

    // check passwored integrity
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    // check credentials
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid login information" });
    }

    // generate token
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePhoto: user.profilePhoto,
    });
  } catch (error) {
    console.log("Error during login", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//LOGOUT
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "You have logged out" });
  } catch (error) {
    console.log("Error logging out", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
