const { faker } = require("@faker-js/faker");

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const meds = [
      {
        title: "Таблетки от кашля",
        price: 100,
        img: faker.image.people(),
        inStock: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Таблетки от головной боли",
        price: 200,
        img: faker.image.people(),
        inStock: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Аспирин",
        price: 300,
        img: faker.image.people(),
        inStock: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Meds", meds);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Meds", null, {});
  },
};
