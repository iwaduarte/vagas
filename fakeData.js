const fakeData = [
  {
    id: 1,
    name: "João Oliveira",
    job: "Desenvolvedor",
  },
  {
    id: 2,
    name: "Tester",
    job: "Tester",
    permissions: {
      update: true,
    },
  },
  {
    id: 3,
    name: "Admin",
    job: "Tech Lead",
    permissions: {
      update: true,
      delete: true,
    },
  },
];

module.exports = fakeData;
