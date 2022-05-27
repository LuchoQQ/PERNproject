import { DataTypes } from "sequelize"
import { sequelize } from '../database/database.js'

export const Activity = sequelize.define('activity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    transaction: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    from: {
        type: DataTypes.STRING,
    },
    to: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: true
})