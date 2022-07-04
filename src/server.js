const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mainRouter = require("./router/mainRouter");

app.use(bodyParser.json());
app.use(mainRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
