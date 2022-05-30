import React, { useState } from "react";
import { Flex, FormControl, Grid, Input, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar'
const RegisterLayout = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState();
	const [error, setError] = useState("");

    const theme = useTheme();

    const navigate = useNavigate();

	const onChangeName = (e) => {
		setName(e.target.value);
	};

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};


	const onSubmit = (e) => {
		e.preventDefault();
        const user = {
            name,
            email,
            password,
        };

            axios({
                method: "post",
                url: "http://localhost:3005/users",
                data: user,
            }).then((res) => {
				if (res.data.message !== undefined) {
					console.log(res.data.message)
					setError(res.data.message);
				} else {
					navigate("/");
				}
            }).catch((err) => {
                throw err;
            });

	};
	return (
		<>
			<Grid
				justifyContent={"center"}
				alignItems={"center"}
				bg={theme.colors.background}
				fontFamily={theme.fonts.text.Spartan}
			>
				<Flex
					direction={"column"}
					width={["100vw", "100vw", "100vw", "100vw"]}
					maxW={"720px"}
					height={"100vh"}
					bg={theme.colors.backgroundSecondary}
					alignItems={"center"}
				>
					<Navbar />
					<Text fontSize={"3xl"} my={"10vh"}>
						Create a new user!
					</Text>
					<FormControl display={"grid"} gap={"4vh"} w={"60%"}>
						<Input
							placeholder="User"
							variant={"flushed"}
							type="name"
							id="name"
							focusBorderColor={theme.colors.primary}
							onChange={onChangeName}
						/>
						<Input
							placeholder="Email"
							variant={"flushed"}
							type="email"
							id="email"
							focusBorderColor={theme.colors.primary}
							onChange={onChangeEmail}
						/>
						<Input
							placeholder="Password"
							variant={"flushed"}
							type="password"
							id="password"
							focusBorderColor={theme.colors.primary}
							onChange={onChangePassword}
						/>
						<Input
							type={"submit"}
							mt={"5vh"}
							size={"lg"}
							_hover={{ bg: theme.colors.primary }}
							focusBorderColor="none"
							onClick={onSubmit}
						/>
					</FormControl>
				<Text
					color={'red'}
				>{error}</Text>
				</Flex>

			</Grid>
		</>
	);
};

export default RegisterLayout;
