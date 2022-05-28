import React from "react";
import {
	Flex,
	Grid,
	Box,
	Text,
	Image,
	Button,
	Link,
	Icon,
	useColorMode,
	theme,
} from "@chakra-ui/react";
import MenuLink from "../components/MenuLink";
import { useUserContext } from "../context/Context";
import { useTheme } from "@emotion/react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const user = useUserContext();

	const name = useUserContext().name;

	const theme = useTheme();

	return (
		<>
			<Flex
                pt={'5vh'}
				width={"100%"}
				bg={theme.colors.background}
                h={'52vh'}
			>
				<Flex mx={"5vw"} flexDir={'column'} color={theme.colors.text} h={'50px'}>
					<Text fontSize={'2rem'}>Total Saving</Text>
					<Text fontSize={"6rem"}>{`$${user.balance}`}</Text>
                    <Text fontSize={'1.6rem'} color={theme.colors.text}>{`Welcome, ${user.name}!`}</Text>
				</Flex>

			</Flex>
		</>
	);
};

export default Navbar;
