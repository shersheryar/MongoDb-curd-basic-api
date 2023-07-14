const express = require("express");
const dbConnect = require("../connection");
const app = express();

// app.get("/", async (req, res) => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   //   console.log(data);
//   res.send(data);
// });

app.get("/", (req, res) => {
  res.send({ name: "sheryar" });
});
app.listen(5000);
