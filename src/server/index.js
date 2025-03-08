import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv(); // THIS IS GONNA WORK. PERIODT.

const app = express();
const PORT = process.env.PORT;

// Test Route
app.get('/', (req, res) => {
  res.send(`SECRET is: ${process.env.SECRET}`);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Your secret: ${process.env.SECRET}`);
});
