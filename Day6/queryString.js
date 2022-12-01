const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let searchedProduct = [...products];

  if (search) {
    searchedProduct = searchedProduct.filter((product) =>
      product.name.startsWith(search)
    );
  }

  if (limit) {
    searchedProduct = searchedProduct.slice(0, Number(limit));
  }

  res.send(searchedProduct);
});

app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
