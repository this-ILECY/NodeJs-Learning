const express = require("express");
const { engine: expressHandlebars } = require("express-handlebars");

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

const users = ["Amirhosein", "Amirreza"];

app.get("/", (req, res) => res.render("home"));
app.get("/amirreza", (req, res) => res.render("amirreza"));
app.get("/users", (req, res) => {
  const user = users[(Math.random()).toFixed(0)];
  res.render("users", { userlist: user });
});

app.listen(port, () => {});
