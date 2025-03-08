import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Test Route
app.get('/', (req, res) => {
  res.send(`SECRET is: ${process.env.SECRET}`);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Your secret: ${process.env.SECRET}`);
});
