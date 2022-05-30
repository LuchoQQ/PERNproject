import { User } from "../models/User.js";
import { Activity } from "../models/Activity.js";
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
		};

		await User.create(newUser);
		res.json({
			message: "User created successfully",
		});
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
        const updatedUser = {
            name,
            email,
            password,
			balance,
        };

        await User.update(updatedUser, { where: { id: id } });
        res.json({
            message: "User updated successfully",
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error updating user",
            reason: error.message,
        });
    }
};

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
			res.send('No activities found');
		} else {
			res.json(result);
		}
	} catch (error) {
		throw new Error(error);
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
