const express = require("express");
const { execPath } = require("process");
const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Hello World</h1><a href ="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    // const { id, name, image } = product;
    const id = product.id;
    const name = product.name;
    const image = product.image;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const eachProduct = products.find(
    (product) => product.id == req.params.productID
  );

  if (eachProduct == undefined) {
    res.status(404).send("Product not Found");
  } else {
    res.send(eachProduct);
  }
});

app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
