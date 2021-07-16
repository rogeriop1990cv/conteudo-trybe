const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

module.exports = {
  getUserName
}

describe('Testa a função getUserName', () => {
  it('Testa se o usuario é encontrado.', (done) => {
    expect(getUserName(4)).toMatch('Mark')
    done();
  })
  // it('Testa se o usuario é encontrado.', () => {})
})
