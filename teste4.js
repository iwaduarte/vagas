let data = require("./fakeData");

module.exports = function (req, res) {
  const { id } = req.query;
  const { name, job } = req.body;

  if (!id || !name || !job) return res.send({});

  const userIndex = data.findIndex((user) => user.id === id);

  if (userIndex === -1) return res.send({});

  const updatedUser = {
    ...data[userIndex],
    name,
    job,
  };

  // o código abaixo  não irá  realmente atualizar o usuário, apenas o objeto na memória como discutido anteriormente
  data = data.slice(0, userIndex).concat(data.slice(userIndex + 1));
  return res.send(updatedUser);
};
