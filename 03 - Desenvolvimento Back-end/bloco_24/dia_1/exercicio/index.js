const express = require('express');
const bodyParser = require("body-parser");

const book = require('./controller/bookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/book', book);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
