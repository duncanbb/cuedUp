module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contributorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Quote.associate = (models) => {
    Quote.belongsTo(models.contributor, {
      foreignKey: 'contributorId',
      as: 'quoteContributor',
    });
  };

  return Quote;
};
