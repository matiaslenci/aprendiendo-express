//ejemplo de Router en express
const { Router } = require("express");
const router = Router();

router.all("/contact", (req, res) => {
  res.send("Contact page");
});

router.get("/contactList", (req, res) => {
  res.send("Contact List");
});

//exporatmos la ruta
module.exports = router;
