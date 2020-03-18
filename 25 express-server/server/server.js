const express = require("express");
const app = express();
const router = require("../routes.js")
const port = 5000;


app.use(router);
app.listen(port, function () {
  console.log("Example app listening on port 5000!");
});
