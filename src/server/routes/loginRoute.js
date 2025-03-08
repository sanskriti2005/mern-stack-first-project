import dotenv from "dotenv";
dotenv.config();

export const loginRoute = (req, res) => {
    if(req.body.password == 'passwd'){
        res.send('yay')
    } else{
        res.send('Wrong Password.' + process.env.SECRET)
    }
    res.send("You loggin in");
  }