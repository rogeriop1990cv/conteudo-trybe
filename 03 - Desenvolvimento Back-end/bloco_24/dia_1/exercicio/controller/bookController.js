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
// POST /book - cria um novo livro;
// POST /book/:id - sobrescreve o livro com ID selecionado;
// DELETE /book/:id - deleta um livro;

module.exports = book
