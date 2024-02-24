'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('registrations', [
      {
        student_id: 7,
        course_id: 1,
        status: 'actual',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 8,
        course_id: 2,
        status: 'actual',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 9,
        course_id: 3,
        status: 'actual',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 10,
        course_id: 4,
        status: 'actual',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('registrations', null, {});
  }
};
