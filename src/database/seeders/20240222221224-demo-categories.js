'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        title: 'Software Engineering',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Back-end Development',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Project Management',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cloud Computing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
