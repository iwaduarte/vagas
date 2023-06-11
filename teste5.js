const { userAccessCount } = require("./teste1");

module.exports = function (req, res) {
  const { name } = req.query;

  //Lembrando que as atualizações estão armazenadas somente em memória.
  res.send(`Usuário ${name} foi lido ${userAccessCount[name]} vezes.`);
};
