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
      {
        title: 'Валериана',
        price: 50,
        img: 'https://static.zdravcity.ru/upload/iblock/f3d/873/photo_es.jpg',
        inStock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Covid-19 Тест',
        price: 100,
        img: 'https://gorzdrav.org/medias/343808-1-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTE1NXxpbWFnZS9wbmd8aGZhL2gzNS8xMDUwNzI3MjE5MjAzMC8zNDM4MDhfMV8zMDBXeDMwMEh8NGE0MGE1M2QyNzk0YWExMjhlZDI3NjVlMjcwZDMwZmUyMGY3ZDEyNWM0YTMyN2Q5ZDg2NzQ0YTMxZTA2OWYzZA',
        inStock: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Никоретте',
        price: 1000,
        img: 'https://gorzdrav.org/medias/205953-1.jpeg-300Wx300H-W?context=bWFzdGVyfHByb2R1Y3R8NDY0MnxpbWFnZS93ZWJwfGg4Ny9oYTUvMTA1OTkxODE0NTEyOTQvMjA1OTUzXzEuanBlZ18zMDBXeDMwMEhfV3xjNmYyMmNkNzE3YzA2MzU0ZWQ3OWFjM2EzYmJhMWRkMzUxZWM1NTA5N2RhMWZlYzcwYWY2MzBmNDJmNjNlZGU0',
        inStock: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Леовит',
        price: 2000,
        img: 'https://gorzdrav.org/medias/211572-2-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTM3N3xpbWFnZS9qcGVnfGg0MS9oMGMvMTAyNzY5NjQwNzM1MDIvMjExNTcyXzJfMzAwV3gzMDBIfDBkYjM4MDlkODdlODNkMjEzZTNhMDdmMmFhZWE5Y2FkNmRmNjI3MjdlZmQ4ZTEwZWYzOGViYzA1ZjA1NjAzYTc',
        inStock: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Магне В6',
        price: 1400,
        img: 'https://gorzdrav.org/medias/252068.jpg-300Wx300H-W?context=bWFzdGVyfHByb2R1Y3R8NTExMnxpbWFnZS93ZWJwfGgwMi9oYjUvMTA2MTMxMjg2NTg5NzQvMjUyMDY4LmpwZ18zMDBXeDMwMEhfV3wyYzAwNTkwZGFkNTgxNjMzZDI1MjY3YzkyYjE5ZmJkNzI1NmExYWYyMDFkYTliNWM3ZTZiMjkzYmI5N2VlYTBi',
        inStock: 2,
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
