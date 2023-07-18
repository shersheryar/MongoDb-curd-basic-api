const express = require("express");
require("./config");
const product = require("./product");
const app = express();

app.use(express.json);

//post api
app.post("/create", async (req, res) => {
  let data = new product(req.body);
  let result = await data.save();
  console.log(req.body);
  res.sendFile("Done");
  res.send(result);
});

///get api
app.get("/list", async (req, res) => {
  let data = await Product.find({ name: "Karachi" });
  res.send(data);
  console.log(data);
});

//delete api
app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await product.deleteOne(req.params);
  console.log(data);
  res.send(data);
});

//put api
app.delete("/update/:_id", async (req, res) => {
  console.log(req.params);
  let data = await product.updateOne(req.params, { $set: req.body });
  console.log(data);
  res.send(data);
});
app.listen(5000);
