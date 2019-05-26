module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    inStock: DataTypes.BOOLEAN,
    price: DataTypes.DOUBLE
  });
  return Products;
};
