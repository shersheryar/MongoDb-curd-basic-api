const connection = require("./connection");

const insert = async () => {
  const db = await connection();
  console.log("insert function");
  const result = await db.insertOne({
    name: "Gilgit",
    country: "Pak",
    timezone: "Asia",
    location: {
      longitute: "23.343",
      latitude: "54.23434",
    },
  });
  if (result.acknowledged) {
    console.log("data Inserted");
  }
};

insert();
