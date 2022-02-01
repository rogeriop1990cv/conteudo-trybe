const book = require('express').Router();
const { Book } = require('../models')

// GET /books - lista todos os livros;
book.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ahhhh Error" })
  }
})

// GET /book/:id - pega o livro com o id especificado;
book.get('/:id', async (req, res) => {
  try {
    const books = await Book.findOne({ where: { id: req.params.id } })
    return res.status(200).json(books)
  }
  catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "Ahhhh Error" })
  }
})
// POST /book - cria um novo livro;
book.post('/', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Ahhhh Error" })
  }
})
// POST /book/:id - sobrescreve o livro com ID selecionado;
book.put('/:id', async (req, res) => {
  try {
    const [book] = await Book.update(req.body, { where: { id: req.params.id } });
    console.log(book);
    res.status(405).json({ id: +req.params.id, ...req.body })
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Ahhhh Error" })
  }
})
// DELETE /book/:id - deleta um livro;
book.delete('/:id', async (req, res) => {
  try {
    const book = await Book.destroy({ where: { id: 1 } });
    console.log(book);
    res.status(405).json(book)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Ahhhh Error" })
  }
})
module.exports = book

