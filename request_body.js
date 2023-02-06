const express = require("express");
const app = express();

//creo el metodo express.text() para que pueda leer el contenido que es de tipo texto
app.use(express.text());
//leer objetos json
app.use(express.json());

app.post("/user", (req, res) => {
  //paso el contenido de la petición por consola
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server corriendo en el puerto ${PORT}`);
