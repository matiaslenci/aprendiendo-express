const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const title = "Pagina generada desde express";
  res.render("index", { title });
});

router.get("/users", (req, res) => {
  res.render('users');
});

module.exports = router;
