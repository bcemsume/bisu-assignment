module.exports = (sequelize, Sequelize) => {
  const Subscription = sequelize.define(
    "subscriptions",
    {
      subscriptionId: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      locationName: {
        type: Sequelize.STRING,
      },
      subCityName: {
        type: Sequelize.STRING,
      },
      cityName: {
        type: Sequelize.STRING,
      },
      brand: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      distributorNumber: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Subscription;
};
