module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define(
    "orders",
    {
      orderId: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subscriptionId: {
        type: Sequelize.STRING,
      },
      deliveryDate: {
        type: Sequelize.STRING,
      },
      paymentMethod: {
        type: Sequelize.STRING,
      },
      products: {
        type: Sequelize.STRING,
      },
      totalAmount: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM("NEW", "CONFIRMED", "CANCELED"),
        defaultValue: "NEW",
      },
    },
    {
      timestamps: false,
    }
  );

  return Order;
};
