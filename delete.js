const connection = require("./connection");

const deleteFtn = async () => {
  let data = await connection();
  let result = await data.deleteMany({ name: "Gilgit" });
  console.log(result);
  if (result.deletedCount >= 1) {
    console.log("record deleted");
  } else {
    console.log("record not present");
  }
};
deleteFtn();
