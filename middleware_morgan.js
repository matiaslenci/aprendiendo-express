const express = require("express");
//guardamos la extension morgan en una constante
const morgan = require("morgan");

const app = express();

app.use(morgan('dev'));

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.listen(3000);
console.log(`Server on port ${3000}`);
