import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const loginRoute = (req, res) => {
  if (req.body.password == "password") {
    const token = jwt.sign(
      {
        userId: 1,
      },
      process.env.SECRET
    );
    res.send({ token });
  } else {
    res.status(401).send("Wrong Password." + process.env.SECRET);
  }
};
