const connection = require("./connection");

const updataData = async () => {
  let data = await connection();
  let result = await data.updateMany(
    { name: "Hunza" },
    { $set: { name: "Hunza", country: "Pakistan" } }
  );
  console.log(result);
};

updataData();
