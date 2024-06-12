import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days to milliseconds
    httpOnly: true, // counter Cross-Site scripting (XSS) attacks
    sameSite: "strict", // counter Cross-Site Request Forgery (CSRF)
  });
};

export default generateTokenAndSetCookie;
