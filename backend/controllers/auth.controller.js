import User from "../models/user.model.js";

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

    // Avatar placeholder

    const maleProfilePic =
      "https://avatar.iran.liara.run/public/boy?username=${username}";
    // const femaleProfilePic =
    //   "https://avatar.iran.liara.run/public/girl?username=${username}";

    const newUser = new User({
      fullname: fullName,
      username: username,
      password: password,
      profilePhoto: maleProfilePic,
    });
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("login");
  console.log("login");
};

export const logout = (req, res) => {
  res.send("logout");
  console.log("logout");
};
