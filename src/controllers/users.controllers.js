import { User } from "../models/User.js";
import { Activity } from "../models/Activity.js";
import Joi from "joi";

const schema = Joi.object().keys({
	  name: Joi.string().required(),
	  email: Joi.string().email().required(),
	  password: Joi.string().required(),
	  id: Joi.string().required(),
	  balance: Joi.number().required(),
});


export const getUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.json(users);
	} catch (error) {
		res.json({
			status: "error",
			message: error.message,
		});
	}
};

export const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findOne({ where: { id: id } });
		if (!user) {
			res.status(404).json({ msg: "User not found" });
		} else {
			res.json(user);
		}
	} catch (error) {
		res.json({
			status: "error",
			message: error.message,
		});
	}
};

export const createUser = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const newUser = {
			id: Math.floor(100000 + Math.random() * 900000).toString(),
			name,
			email,
			password,
			balance: 0

		};
		const result = schema.validate(newUser);
		if (result.error) {
			res.status(400).json({ msg: result.error.details[0].message });
		} else {
			const user = await User.create(newUser);
			res.json(user);
		}
	} catch (error) {
		res.status(500).json({
			msg: "Error creating user",
			reason: error.message,
		});
	}
};

export const updateUser = async (req, res) => {
	try {
        const { id } = req.params;
        const { name, email, password, balance } = req.body;
        const user = await User.findOne({ where: { id: id } });
		if (!user) {
			res.status(404).json({ msg: "User not found" });
		} else {
			const newUser = {
				name,
				email,
				password,
				balance,
			};
			await user.update(newUser);
			res.json(user);
		}
	} catch (error) {
		res.json({
			status: "error",
			message: error.message,
		});
	}
}

export const deleteUser = async (req, res) => {
	try {
        const { id } = req.params;
        const user = await User.findOne({ where: { id: id } });
        if (!user) {
            res.status(404).json({ msg: "User not found" });
        } else {
            await User.destroy({ where: { id: id } });
            res.json({
                message: "User deleted successfully",
            });
        }
    } catch (error) {
        res.json({
            status: "error",
            message: error.message,
        });
    }
};

export const getUserActivity = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await Activity.findAll({ where: { user_id: id } })
		if (result.length === 0) {
			res.json([]);
		} else {
			res.json(result);
		}
	} catch (error) {
		throw error;
	}
}

export const verifyUser = async (req, res) => {
	const { name, password } = req.body;
	try {
		const user = await User.findOne({ where: { name: name } });
		if (!user) {
			res.status(404).json({ msg: "User not found" });
		} else {
			if (user.password === password && name !== undefined) {
				res.json(user);
			} else {
				res.status(401).json({ msg: "Invalid credentials" });
			}
		}
	} catch (error) {
		res.status(500).json({
			status: "500",
			message: error.message,
		});
	}
}

export const getTenActivity = async (req, res) => {
	const { id } = req.params;

	try {
		const result = await Activity.findAll({ where: { user_id: id }, limit: 10 })
		if (result.length === 0) {
			res.json([]);
		} else {
			res.json(result.reverse());
		}
	} catch (error) {
		throw error;
	}
}