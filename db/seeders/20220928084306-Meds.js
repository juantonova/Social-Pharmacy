const { faker } = require('@faker-js/faker');

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const meds = [
      {
        title: 'Пенталгин',
        price: 155,
        img: 'https://otcpharm.ru/files/resize_cache/webp/iblock/c66/pentalgin_p25_3.webp',
        inStock: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Глицин',
        price: 50,
        img: 'https://cdn.eapteka.ru/upload/offer_photo/446/76/1_eb2343b840056ab0a8fbe45dbdf1c7a6.png?t=1637815304&_cvc=1662717556',
        inStock: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Кларитин',
        price: 196,
        img: 'https://cdn.eapteka.ru/upload/offer_photo/205/20/1_86f044ef62b0ceac58cdb8163a072700.png?t=1644313561&_cvc=1664357053',
        inStock: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Афобазол',
        price: 356,
        img: 'https://cdn.eapteka.ru/upload/offer_photo/211/264/1_73b3c84ea775396cc3ac2aebbb6a05dc.png?t=1657628407&_cvc=1664208977',
        inStock: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Новопассит',
        price: 200,
        img: 'https://irecommend.ru/sites/default/files/product-images/786198/XQh8uTCFXKUZUXtm2C86ew.png',
        inStock: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Успокоин',
        price: 600,
        img: 'https://4lapy.ru/resize/800x800/upload/iblock/0b7/0b776811c3dd18c30bbce4b2eb6f4421.jpg',
        inStock: 20,
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
