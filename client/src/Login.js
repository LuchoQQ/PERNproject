import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLoggedContext, useUpdateContext, useUserContext } from "./context/Context";
import LoginLayout from "./layouts/LoginLayout";
const Login = () => {
	const isLogged = useLoggedContext();
	const setIsLogged = useUpdateContext();
	const user = useUserContext();
	const [users, setUsers] = useState([user]);

	//get user for client form
	useEffect(() => {
		
	}, [user]);
	//get users from database
	useEffect(() => {
		const nose = axios({
			method: "get",
			url: `http://localhost:3005/users/search/${user}`,
		})
		.then(res => res.data)
		.then(data => {
			setUsers(data);
		})
		
		console.log(users);
	}, [user])
	
	const [logged, setLogged] = useState(isLogged);
	

	const onSetLogged = () => {
		setLogged(!logged);
		setIsLogged(!logged);
		console.log(logged);
	};

	return (
		<>
			{/* <button onClick={() => onSetLogged()}>setLogged</button> */}
			<LoginLayout />
		</>
	);
};

export default Login;
