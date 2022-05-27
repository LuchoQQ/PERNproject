import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("users", "postgres", "15987412365", {
    host: "localhost",
    dialect: "postgres",
    port: 4000,
});

