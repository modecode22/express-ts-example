import express from "express";

const app = express();
const PORT = 3900;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
