'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('Books', [
      {
        title: "Estoria sem Fim",
        author: "Sei la",
        pageQuantity: 150
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Books', null, {})
  }
};
