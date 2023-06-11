let data = require("./fakeData");

module.exports = function (req, res) {
  const { name = "" } = req.query;

  // o código abaixo  não irá  realmente deletar o usuário, apenas o objeto na memória
  // 1- Considerando um banco de dados ou API, devemos ter uma chamada async para criar
  // o update devido no banco de dados
  // 2 - Atualizando um arquivo armazenado no servidor devemos utilizar o módulo File do Node
  // para ler, criar e editar o arquivo
  // 3 - Me baseando no código anterior mantive a mesma ideia só que com menos passos
  // 4 - Note isso vai remover somente o primeiro usuário com o nome especifico, não sei se essa é a intenção mas usaria "id" aqui

  const userIndex = data.findIndex((user) => user.name === name);

  if (userIndex === -1) return res.send("Not Found!");

  data = data.slice(0, userIndex).concat(data.slice(userIndex + 1));
  return res.send("Success!");
};
