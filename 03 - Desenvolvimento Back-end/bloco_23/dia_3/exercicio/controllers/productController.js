const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

// Buscando todos os produtos.
router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json({ products });
});

// Buscando um produto pela ID.
router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).json({ product });
});

// Criando um Novo Produto.
router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json({ products });
});

// Deletando um produto pela ID.
router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(200).json({ products });
});

// Atualizando um Produto pela ID.
router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json({ products });
});

module.exports = router;
