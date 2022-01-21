const connection = require('./connection');

const isValid = (firstName, lastName, password, email) => {
  if (!firstName || typeof firstName !== 'string') return { firstName: false };
  if (!lastName || typeof lastName !== 'string') return { lastName: false };
  if (!password || typeof lastName !== 'number') return { password: false };
  if (password.length <= 6) return { password: "Tamanho" };
  if (!email || typeof lastName !== 'string') return { email: false };
  return true;
}

const create = async (userData) => {
  const { firstName, lastName, password, email } = userData
  try {
    await connection.execute(
      `INSERT INTO 
        model_example.user (first_name, last_name, password, email)
      VALUES(?, ?, ?, ?)`,
      [firstName, lastName, password, email]
    )
  } catch (error) {
    console.log('Erro ao inserir o usuário ao banco de dados.')
  }
}

module.exports = {
  create,
  isValid
}
