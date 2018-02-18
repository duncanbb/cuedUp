module.exports = (sequelize, DataTypes) => {
  const Contributor = sequelize.define('Contributor', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  Contributor.associate = (models) => {
    Contributor.hasMany(models.)
    // associations can be defined here
  };
  return Contributor;
};