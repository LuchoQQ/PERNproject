import React, { useState } from "react";
import { Flex, FormControl, Grid, Input, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterLayout = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();

    const theme = useTheme();

    const navigate = useNavigate();

	const onChangeName = (e) => {
		setName(e.target.value);
		console.log(name);
	};

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
		console.log(email);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
		console.log(password);
	};

	const onChangeConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
		console.log(confirmPassword);
	};

	const onSubmit = (e) => {
		e.preventDefault();
        const user = {
            name,
            email,
            password,
            confirmPassword,
        };

		if (password === confirmPassword) {
			console.log("success");
            axios({
                method: "post",
                url: "http://localhost:3005/users",
                data: user,
            }).then(() => {
                navigate("/");
            }).catch((err) => {
                console.log(err);
            });

		} else {
			console.log("fail");
		}
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
					justifyContent={"center"}
				>
					<Text fontSize={"3xl"} mb={"10vh"}>
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
							placeholder="Confirm Pasword"
							variant={"flushed"}
							type="password"
							id="confirm"
							focusBorderColor={theme.colors.primary}
							onChange={onChangeConfirmPassword}
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
				</Flex>
			</Grid>
		</>
	);
};

export default RegisterLayout;