import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send("Invalid Credentials: You're probably not logged in");
  } else {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res
          .status(403)
          .send("Invalid Credentials. You've probably done something wrong");
      } else {
        next();
      }
    });
  }
};
