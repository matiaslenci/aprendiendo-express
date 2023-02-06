const express = require("express");
const app = express();

//middleware
//creamos una función por la que pasan todos los rutas antes de cargar una acción
//le pasamos los parametros req,res y next que es una funcion
app.use((req, res, next) => {
  console.log(`Route: ${req.url} Metodo:${req.method}`);
  //esta función inidica que ya finalizo la función y continue con la carga de la página
  next();
});

//muestra la pagina profile page
app.get("/profile", (req, res) => {
  res.send("profile page");
});

//todas las rutas que cree pasaran por la función middleware

app.listen(3000);
