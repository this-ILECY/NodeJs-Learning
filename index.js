//we have shorter version of 'res' here. check line 11 for instance!

const express = require("express");
const port = 3000;
const app = express();

app.get("/get", (req, res) => {
  const id = req.query.id;
  res.type("text/pain");

  if (id == 1) res.send("You chosed Amirhosein!");
  else if (id == 2) res.send("You chosed Amirreza!");
  else res.status(404).send("404 Error: id is missing")
});

//if you put 'app.get' under 'app.use', won't work.
app.get("/amirreza", (req, res) => {
  res.type("text/pain").send("Hello Amirreza!");
});

app.get("/amirhosein", (req, res) => {
  res.type("text/pain").send("Hello Amirhosein!");
});

app.use((req, res) => {
  res.type("text/pain").status(404).send("404 not found");
});

app.listen(port, () => {});
