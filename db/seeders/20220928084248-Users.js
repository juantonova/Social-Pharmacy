const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        name: 'angelika',
        email: 'angelika@mail.ru',
        password: await bcrypt.hash('12345678', 10),
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.fullName(),
        email: '12345@mail.ru',
        password: await bcrypt.hash('qwe123456', 10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.fullName(),
        email: '12345@mail.ru',
        password: await bcrypt.hash('qwe123456', 10),
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
