const validateUser = async (userDB, userClient, callback) => {
	if (userDB.name !== undefined) {
		if (
			userDB.name === userClient.name &&
			userDB.password === userClient.password
		) {
			await callback
			return true;
		} else if (userDB.name !== userClient.name) {
			callback(false);
		} else if (userDB.password !== userClient.password) {
			console.log("Invalid password");
			callback(false);
		}
	} else {
		console.log("user not found");
		return false;
	}
};

export default validateUser;