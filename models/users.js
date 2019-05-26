module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    exist: DataTypes.BOOLEAN
  });
  return Users;
};
