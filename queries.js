//Queries
const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  console.log(req.query);
  if (req.query.q === "books") {
    res.send("lista de libros");
  } else {
    res.send("pagina normal");
  }
});

//metodo all
app.all("/info", (req, res) => {
  res.send("server info");
});

app.listen(3000);
