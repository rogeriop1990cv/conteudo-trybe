const getRepos = require('./getRepos')
const data = require('./getResposData')

jest.mock('./getRepos')
getRepos.mockResolvedValue(data)

describe('Testando que os repositórios existem.', () => {
  it('Se existe sd-01-week4-5-project-todo-list', async () => {
    const request = await getRepos('https://api.github.com/orgs/tryber/repos')
    expect(request).toContain('sd-01-week4-5-project-todo-list')
  });

  it('Se existe sd-01-week4-5-project-meme-generator', async () => {
    const request = await getRepos('https://api.github.com/orgs/tryber/repos')
    expect(request).toContain('sd-01-week4-5-project-meme-generator')
  });

})
