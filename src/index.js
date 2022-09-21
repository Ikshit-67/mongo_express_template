require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).json({ success: true, data: { msg: "Hello from backend!" } });
});

app.listen(port, () => console.log(`Listening on Port ${port}`));
