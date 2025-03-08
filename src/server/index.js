import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors"
import { router } from "./router.js";

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send(`SECRET is: ${process.env.SECRET}`);
});

app.use(express.json())
app.use(morgan('dev'))
app.use(cors());
app.use(router);


app.get('/todos', (req, res) => {
  res.send('Hello!!! my baby' + process.env.MONGO_URI)
})

app.listen(8080, () => {
  console.log(`Your first server is running on port 8080`);
});
