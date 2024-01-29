const express = require("express");
const { engine: expressHandlebars } = require('express-handlebars')

const app = express();

// configure Handlebars view engine
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

const port = 3000;

app.get("/", (req, res) => res.render("home"));
app.get("/amirreza", (req, res) => res.render("amirreza"));

app.listen(port, () => {});
