const express = require("express");
const expressHandlebars = require("express-handlebars");

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

app.listen(port, () => {});
