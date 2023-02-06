const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/miarchivo", (req, res) => {
  //este sendFile puede servir cuando queremos que el usuario descargue algo o tenga acceso a solo un archivo
  //no es necesario que sea una imagen puede ser cualquier tipo de archivo(un audio,un pdf, un archivo.txt)
  res.sendFile("./javascript.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  //enviamos un objeto json
  //este json deberia ser traido de una base de datos pero tambien lo podemos escribir manualemnte
  res.json({
    nombre: "matias",
    apellido: "lenci",
    edad: 21,
    puntos: [1, 2, 3],
    dirección: {
      ciudad: "Santa Fe",
      calle: "Almaraz 1432",
    },
  });
});

app.listen(3001);
console.log(`Server on port ${3001}`);
