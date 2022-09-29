const { faker } = require('@faker-js/faker');

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const meds = [
      {
        title: 'Таблетки от кашля',
        price: 100,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Таблетки от головной боли',
        price: 200,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Аспирин',
        price: 300,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Нога',
        price: 300,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'релаксант',
        price: 100,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'улыбака',
        price: 200,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'антидепересант',
        price: 300,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'хром',
        price: 300,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'магний',
        price: 100,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'витамины',
        price: 200,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'снег',
        price: 300,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'единорг',
        price: 300,
        img: faker.image.people(),
        inStock: Math.floor(Math.random() * 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Meds', meds);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Meds', null, {});
  },
};
