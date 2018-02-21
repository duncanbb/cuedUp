module.exports = (sequelize, DataTypes) => {
  const Contributor = sequelize.define('Contributor', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  Contributor.associate = (models) => {
    Contributor.hasMany(models.Quote, {
      foreignKey: 'contributorId',
      as: 'quotes',
    });
  };
  return Contributor;
};
