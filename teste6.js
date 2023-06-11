const data = require("./fakeData");

const permissionsMiddleware = (action) => (req, res, next) => {
  // Aqui poderia ser uma sessão do usuário que solicitou o request ou
  // token identificador, mas usaremos a variavel da query userId para
  // identificar quem está fazendo o request

  const { userId } = req.query;
  const user = data.find((user) => user.id === userId);

  if (!user || !user.permissions || !user.permissions[action]) {
    return res.status(403).send("Permission denied");
  }

  next();
};

module.exports = permissionsMiddleware;
