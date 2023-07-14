const express = require("express");
const dbConnect = require("../connection");
const app = express();

app.use(express.json());
app.post("/", async (req, res) => {
  let connection = await dbConnect();
  let update = await connection.updateOne(
    { name: "Karachi" },
    { $set: { name: "Islamabadd", country: "Pakistan" } }
  );
  //   console.log(insert);
  res.send(update);
});

app.listen(5000);
