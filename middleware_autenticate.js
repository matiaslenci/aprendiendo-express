const express = require("express");
const app = express();

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

//middleware para autentificar 
app.use((req, res, next) => {
  //si recibimos la query de login devolvemos el get de dashboard
  if (req.query.login === "matias@gmail.com") {
    next();
    //sino devolvemos un mensaje de que no esta autorizado
  } else {
    res.send("No autorizado");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

app.listen(3000);
