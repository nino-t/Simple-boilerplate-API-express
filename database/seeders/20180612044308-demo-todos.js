'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('todos', [
      {
          name: 'Learing Redux',
          desc: 'One morning, when Gregor Samsa woke from troubled dreams.',
          is_complete: true
      },
      {
        name: 'Learing NodeJS',
        desc: 'One morning, when Gregor Samsa woke from troubled dreams.',
        is_complete: false
      },
      {
        name: 'Learing Webpack',
        desc: 'One morning, when Gregor Samsa woke from troubled dreams.',
        is_complete: true
      },
      {
        name: 'Learing Styled Components',
        desc: 'One morning, when Gregor Samsa woke from troubled dreams.',
        is_complete: false
      },
      {
        name: 'Learing React Native',
        desc: 'One morning, when Gregor Samsa woke from troubled dreams.',
        is_complete: true
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
