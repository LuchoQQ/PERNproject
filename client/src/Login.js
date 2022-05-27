import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLoggedContext, useUpdateContext, useUserContext } from "./context/Context";
import LoginLayout from "./layouts/LoginLayout";
const Login = () => {
	const setIsLogged = useUpdateContext(); 
	
	const userContext = useUserContext(); //get user context from client form

	const [userDB, setUserDB] = useState({});

	const errors = []
	



	//validate user
	
	const validateUser = () => {
		if (userDB.name !== undefined) { 
			if (userDB.name === userContext.name && userDB.password === userContext.password) {
				setIsLogged(true);
			} else if (userDB.name !== userContext.name) {
				console.log("Invalid username");
				errors.push("Invalid username");
			} else if (userDB.password !== userContext.password) {
				console.log("Invalid password");
				errors.push("Invalid password");
			}
		 } else {
			console.log('user not found');
			errors.push("user not found");
		 }
		
	}




	//get users from database

	useEffect(() => {
		axios({
			method: "get",
			url: `http://localhost:3005/users/search/${userContext.name}`,
		})
		.then(res => res.data)
		.then(data => { setUserDB(data) })
		validateUser()
	}, [userContext])

	




	return (
		<>
			<LoginLayout errors={errors	}/>
		</>
	);
};

export default Login;
