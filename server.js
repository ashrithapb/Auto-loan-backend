const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const getApi = require("./routes/getApi");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", getApi);

app.listen(3002, () => {
  console.log("port 3002");
});
