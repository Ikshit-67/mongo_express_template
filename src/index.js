require("dotenv").config();
require("./configs/db.config");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const body_parser = require("body-parser");

app.use(express.json());

app.use(body_parser.json());

const Order = require("./model/order.model");
const Customer = require("./model/customers.model");

app.get("/", (req, res) => {
  res.status(200).json({ success: true, data: { msg: "Hello from backend!" } });
});


app.post("/create_order", async(req, res) => {
  console.log(req.body);
  const result = await Order(req.body).save();
  res.status(200).json({ success: true, data:result});
})

app.post("/create_customer", async(req, res) =>{
  const result = await Customer(req.body).save();
  res.status(200).json({success:true, data:result});
})

app.listen(port, () => console.log(`Listening on Port ${port}`));
