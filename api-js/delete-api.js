const express = require("express");
const dbConnect = require("../connection");
const mongoDb = require("./mongodb");
const app = express();

app.delete("/:id", async (req, res) => {
  //   res.send("done");
  const connect = await dbConnect();
  let result = connect.deleteOne({ id: new mongoDb.ObjectId(req.params.id) });
});

app.listen(5000);
