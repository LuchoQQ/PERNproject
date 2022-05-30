import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLoggedContext, useUpdateLoggedContext, useUpdateUserContext, useUserContext } from "../context/Context";
import LoginLayout from "../layouts/LoginLayout";
import { useNavigate } from "react-router-dom";
import validateUser from '../utils/validateUser'


const Login = () => {
	const navigate = useNavigate()
	//const updateContext = useUpdateContext()
	const userLogged = useLoggedContext()
	const userContext = useUpdateLoggedContext()

	const user = useUserContext()
	const updateContext = useUpdateUserContext()

	useEffect(() => {
		if (userContext.name) {
			axios({
				method: "post",
				url: "http://localhost:3005/users/verify",
				data: { 
					name: user.name,
					password: user.password
				 }
			}).then((res) => {
				updateContext(res.data)
				userContext(true)
				navigate("/")
			})

			
		}
	}, [user])

	return (


		

		<>
			<LoginLayout/>
		</>
	);
};

export default Login;
