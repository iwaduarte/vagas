const data = require("./fakeData");

module.exports = function (req, res) {
  const { name, job } = req.body;

  if (!name || !job) return res.send({});

  const newUser = {
    id: data.length + 1,
    name,
    job,
  };
  // o código abaixo  não irá  realmente atualizar o usuário, apenas o objeto na memória
  // 1- Considerando um banco de dados ou API, devemos ter uma chamada async para criar
  // o update devido no banco de dados
  // 2 - Atualizando um arquivo armazenado no servidor devemos utilizar o módulo File do Node
  // para ler, criar e editar o arquivo
  // 3 - Me baseando no código anterior mantive a mesma ideia só que com menos passos e corrigindo os erros

  data.push(newUser);

  return res.send(newUser);
};
