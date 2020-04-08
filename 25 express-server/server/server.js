const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const router = require("../routes.js");
const cors = require("cors");
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.use( ( req, res, next ) => {
  console.log( req.method, req.url );
  if ( true ) {
    next();
  }
  else {
    return res.sendStatus(401);
  }
})

app.use(router);
app.listen(port, function () {
  console.log("Example app listening on port 5000!");
});
