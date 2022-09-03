require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY || "kamal";
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) return reject(err);

      return resolve(decoded);
    });
  });
};
const authenticate = async (req, res, next) => {
  console.log(req.headers, "req.headers");
  if (!req.headers.authorization)
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect" });

  if (!req.headers.authorization.startsWith("Bearer "))
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect" });

  const token = req.headers.authorization.trim().split(" ")[1];

  let decoded;
  try {
    decoded = await verifyToken(token);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect" });
  }

  req.userID = decoded.user._id;
  console.log(req.userID);
  return next();
};

module.exports = authenticate;
