// const Sequelize = require("sequelize");
// const dbConfig = require("./db.config.js");

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection to the MySQL database successful");
//   })
//   .catch((error) => {
//     console.error("Error connecting to the MySQL database:", error);
//   });


const db = require("./models");

db.sequelize.sync().then(async (req) => {
  // console.log("works");

  // console.log(
  db.user.create({ nickname: "mymama ?" })
    .then(() => { console.log("added"); })
    .catch((e) => { console.log("!!!ERROR.", e) });
  // );
  // await db.user.destroy({ where: {}, truncate: false });

  console.log((await db.user.findAll()).map((e) => {
    // console.log(e);
    return e;
  }));
  return;
});