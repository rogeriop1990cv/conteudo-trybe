module.exports = (Sequelize, DataType) => {
  const Plans = sequelize.define('Plans', {
    plan_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  });

  Patients
  return Plan;
}

