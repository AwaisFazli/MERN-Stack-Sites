const { query } = require("express");
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const search = "ab";

  const products = await Product.find({
    name: { $regex: search, $options: "i" },
  });
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};

  let results = Product.find(queryObject);

  if (featured) {
    queryObject.featured = featured == "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (sort) {
    const sortlist = sort.replace(",", " ");
    results = results.sort(sortlist);
  } else {
    results = results.sort("createdAt");
  }
  if (fields) {
    const fieldslist = fields.replace(",", " ");
    results = results.select(fieldslist);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  results = results.skip(skip).limit(limit);
  const products = await results;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
