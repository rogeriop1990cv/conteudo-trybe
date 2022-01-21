const connection = require('./connection');

const isValid = (firstName, lastName, password, email) => {
  if (!firstName || typeof firstName !== 'string') throw {
    "error": true,
    "message": "O campo 'Nome' não pode se vazio"
  };

  if (!lastName || typeof lastName !== 'string') throw {
    "error": true,
    "message": "O campo 'Sobrenome' não pode se vazio"
  };

  if (!password || typeof password !== 'string') throw {
    "error": true,
    "message": "O campo 'Password' não pode se vazio"
  };

  if (!email || typeof email !== 'string') throw {
    "error": true,
    "message": "O campo 'Email' não pode se vazio"
  };

  if (password.length <= 6) throw {
    "error": true,
    "message": "O campo 'Password' deve ter pelo menos 6 caracteres"
  };

}

const create = async (userData) => {
  const { firstName, lastName, password, email } = userData

  try {
    const [ResultSetHeader] = await connection.execute(
      `INSERT INTO 
        model_example.user (first_name, last_name, password, email)
      VALUES(?, ?, ?, ?)`,
      [firstName, lastName, password, email]
    )
    return { id: ResultSetHeader.insertId, firstName, lastName, email };
  } catch (error) {
    console.log('Erro ao inserir o usuário ao banco de dados.')
  }
}

module.exports = {
  create,
  isValid
}
