// index.js

const express = require('express');
const { status } = require('express/lib/response');


const Author = require('./models/Author');
const User = require('./models/User');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(author);
})

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos!!!' });
  await Author.create(first_name, middle_name, last_name)
  res.status(201).json({ message: 'Author criado com sucesso!!' });
})

// Rotas Users.
app.get('/user', async (req, res) => {
  const users = await User.getAllUsers();
  res.status(200).json(users);
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.getById(id)
    if (!user.length) return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    })
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    })
  }
})
app.post('/user', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    User.isValid(firstName, lastName, password, email);
    const result = await User.create({ firstName, lastName, password, email });
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
