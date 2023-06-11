const data = require("./fakeData");

const userAccessCount = {};

const getUser = (req, res) => {
  const { name } = req.query;
  const user = data.find((user) => user.name === name) || {};

  if (user.name) {
    userAccessCount[user.name] = (userAccessCount[user.name] || 0) + 1;
  }

  return res.send(user);
};

const getUsers = (req, res) => {
  return res.send(data);
};

module.exports = {
  getUser,
  getUsers,
  userAccessCount,
};
