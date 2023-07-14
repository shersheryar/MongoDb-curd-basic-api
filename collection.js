const connection = require("./connection");

const main = async () => {
  let data = await connection();
  data = await data.find({}).toArray();
  console.warn(data);
};

main();
