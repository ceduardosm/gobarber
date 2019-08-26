module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
