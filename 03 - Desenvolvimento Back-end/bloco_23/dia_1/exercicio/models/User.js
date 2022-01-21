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

const getAllUsers = async () => {
  try {
    const [users] = await connection.execute(
      'SELECT id, first_name, last_name, email FROM model_example.user;',
    );
    return users;
  } catch (error) {
    console.error(error)
  }
};

const getById = async (id) => {
  const [user] = await connection.execute(
    `
    SELECT id, first_name, last_name, email 
    FROM model_example.user
    WHERE id=?;
    `, [id]
  );
  return user;
}

const update = async (userDate) => {
  const { firstName, lastName, password, email, id } = userDate;
  await connection.execute(
    `
    UPDATE model_example.user
    SET
      first_name=?,
      last_name=?,
      password=?,
      email=?
    WHERE id=?;
    `, [firstName, lastName, password, email, id]
  )
}
module.exports = {
  create,
  getAllUsers,
  getById,
  update,
  isValid
}
