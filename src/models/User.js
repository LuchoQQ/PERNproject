import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Activity } from "./Activity.js";

export const User = sequelize.define(
	"users",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		balance: {
			type: DataTypes.INTEGER,
		}
	},
	{
		timestamps: true,
	}
);

User.hasMany(Activity, {
	foreignKey: "user_id",
	sourceKey: "id",
});

Activity.belongsTo(User, {
	foreignKey: "user_id",
	targetKey: "id",
});
