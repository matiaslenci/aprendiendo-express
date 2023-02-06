const express = require("express");
const app = express();

//url con datos dinamicos
app.get("/hello/:user", (req, res) => {
  res.send(`Hello ${req.params.user.toLowerCase()}`);
});

//pido 2 numeros en la ruta para sumarlos
app.get("/suma/:x/:y", (req, res) => {
  //parselo los parametros de la url, los sumo y los guardo en una constante
  const result = parseInt(req.params.x) + parseInt(req.params.y);
  console.log(result); // 13
  res.send(`Result: ${result}`);
});

//simplificar extraccion de parametros
app.get("/resta/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`Result: ${parseInt(x) - parseInt(y)}`);
});

//parametros entre rutas
app.get("/:username/foto", (req, res) => {
  //agregamos una condicional, si el nombre de usuario es igual a matias mostra una imagen
  if (req.params.username === "matias") {
    return res.sendFile("./javascript.png", {
      root: __dirname,
    });
  }
  //sino devuelve un mensaje
  res.send("Nombre de usuario incorrecto");
});

//Podemos recibir varios parametros y no es necesario que este uno despues del otro
app.get("/name/:name/age/:age", (req, res) => {
  res.send(`Mi nombre es ${req.params.name} y tengo ${req.params.age} años`);
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server corriendo en el puerto ${PORT}`);
