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

describe('Testa a função getUserName', () => {
  it('Testa se o usuario é encontrado.', () => {
    expect.assertions(1)
    return getUserName(4).then(id => {
      expect(id).toEqual('Mark')
    })
  })

  it('Testa se o usuario não é encontrado.', () => {
    return getUserName(10).catch(valor => {
      expect(valor).toEqual({ error: 'User with ' + 10 + ' not found.' })
    })
  })
})
