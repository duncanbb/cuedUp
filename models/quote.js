module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    author: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    body: DataTypes.STRING,
    contributorId: DataTypes.INTEGER,
  }, {});
  Quote.associate = (models) => {
    console.log(models);
    // associations can be defined here
  };
  return Quote;
};
