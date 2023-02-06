const express = require("express");

const app = express();

//petición GET
app.get("/", (req, res) => {
  //el .send es igual que es el .end de node pero este reconoce
  res.send("Hello world");
});

//Si visitas la ruta /about ejecutara el código que le pasemos
app.get("/about", (req, res) => {
  //en este caso devuelve el texto 'About'
  res.send("About");
});

//peticion POST
app.post("/products", (req, res) => {
  res.send("creando productos");
});

//peticion PUT
app.put("/products", (req, res) => {
  res.send("Actualizando producto");
});

//peticion DELETE
app.delete("/products", (req, res) => {
  res.send("eleminando un producto");
});

//peticion PATCH
app.patch("/products", (req, res) => {
  res.send("actualizando una parte de un producto");
});

//Pagina de error
app.use((req, res) => {
  res.status(404).send("No se encontro tu página");
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server ejecutandose en puerto ${PORT}`);
