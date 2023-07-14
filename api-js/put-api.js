const express = require("express");
const dbConnect = require("../connection");
const app = express();

app.use(express.json());
app.put("/", async (req, res) => {
  let connection = await dbConnect();
  let update = await connection.updateOne({});
  res.send(update);
});
app.put("/:name", async (req, res) => {
  let connection = await dbConnect();
  let update = await connection.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send(update);
});

app.listen(5000);
