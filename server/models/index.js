const Sequelize = require("sequelize");

const dbConfig = {
  HOST: "mysql-db",
  USER: "root",
  PASSWORD: "1Q2w3e4r",
  DB: "biSU",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.subscriptions = require("./subscription.model")(sequelize, Sequelize);
db.orders = require("./order.model")(sequelize, Sequelize);

module.exports = db;
