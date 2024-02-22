'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        title: 'Clean Architecture',
        description: 'Clean Architecture course for begginers',
        start_date: '2023-01-01',
        category_id: 1,
        teacher_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'SpringBoot',
        description: 'Java course with Spring Framework',
        start_date: '2023-01-01',
        category_id: 2,
        teacher_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Scrum Management',
        description: 'Agile Framework for projects',
        start_date: '2023-01-01',
        category_id: 3,
        teacher_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'AWS and Google Cloud',
        description: 'Automatized Deploys',
        start_date: '2023-01-01',
        category_id: 4,
        teacher_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
