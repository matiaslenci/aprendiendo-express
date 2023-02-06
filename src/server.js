const express = require("express");
const morgan = require("morgan");
//nos permite trabajar con directorios
const path = require("path");
require("ejs");

const app = express();

//*Routes de contacto
const ContacRoutes = require("./routes/contact");
const HomeRoutes = require("./routes/home");

//*settings propios
app.set("appName", "Curso de Express");
app.set("port", 3000);
//*settings de express
app.set("case sensitive routing", true);
//*settings para ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//*middleware
app.use(morgan("dev"));
//?con este middleware parceamos nuestro código a json
app.use(express.json());

//*json de objetos
let products = [
  {
    id: 0,
    name: "laptop",
    price: 3000,
  },
  {
    id: 1,
    name: "phone",
    price: 700,
  },
];

//*funciones

app.use(ContacRoutes);
app.use(HomeRoutes)

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length++ };
  products.push(newProduct);
  res.send();
});

/* app.put("/products:id", (req, res) => {
  const newData = req.body; // name || price || name && price
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!productFound)
    return res.status(404).json({ message: "product no found" });


  products = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );

  res.json({ mesage: "producto actualizado" });
}); */

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newData = req.body; //? name || price || name && price

  let productFound = false;

  //?iteramos la lista de productos con map si preguntamos si el id del producto es igual al id que obtenemos por params entonces copia el producto y reemplaza los antiguos datos por los nuevos, sino devuelve el mismo objeto
  products = products.map((product) => {
    if (product.id === id) {
      productFound = true;
      return { ...product, ...newData };
    }
    return product;
  });

  if (!productFound) {
    return res.status(404).json({ message: "Product not found" });
  }

  console.log(products);
  res.json({ message: "Product updated successfully" });
});

app.delete("/products/:id", (req, res) => {
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!productFound) {
    return res.status(404).json({ message: "product no found" });
  } else {
    products = products.filter((p) => p.id !== parseInt(req.params.id));

    //?devolvemos un 204(no content)
    res.sendStatus(204);
  }
});

//?este get devuelve un producto especifico dependiendo su id
app.get("/products/:id", (req, res) => {
  //? extraemos el id de parametro, utilizamos un find para compararlo con el id de la lista de productos y lo guardamos en una constante
  const productFound = products.find((product) => product.id == req.params.id);

  //?si el producto que trata de buscar no existe devuelve un json con un mensaje de que el producto no se encontro y un status code de 404
  if (!productFound) {
    return res.status(404).json({ message: "product no found" });
  }

  //?devolvemos el objeto solicitado en formato json
  res.json(productFound);
  console.log(productFound);
});

//?ejemplo de cambio de comportamiento utilizando settings
app.get("/userName", (req, res) => {
  res.send("Username route");
});

//?archivos estaticos
//estos siempre van al final de nuestra aplicación.
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("upload", express.static(path.join(__dirname, "upload")));

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
