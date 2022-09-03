require("dotenv").config();
const app = require("./index");
const connect = require("./configs/db");

const PORT = process.env.PORT || 5050;

app.listen(PORT, async (req, res) => {
  try {
    console.log(`server listing on the port ${PORT}`);
    await connect();
    console.log("server connected to the database");
  } catch (err) {
    console.log(err.message);
  }
});
