const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

// Buscando todos os produtos.
router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.send(products);
});

// Buscando um produto por Id.
router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.send(product);
});

// Criando um Novo Produto.
router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
});

// Deletando um produto por Id.
router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
});

// Atualizando um Produto pela ID.
router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;
