module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.createTable('Contributors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    })),
  down: (queryInterface, Sequelize) => (
    queryInterface.dropTable('Contributors')
  ),
};
