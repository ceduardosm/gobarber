module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      provider: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
