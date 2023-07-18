const express = require("express");
require("./config");
const product = require("./product");
const app = express();

app.use(express.json);

app.get("/search/:key", async (req, res) => {
  //   let data = await product.find(req.params.key); //for single fields
  //search in multiple fields
  let data = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { country: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

app.listen(5000);
