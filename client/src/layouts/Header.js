import React from "react";
import {
	Flex,
	Text,
} from "@chakra-ui/react";
import { useUserContext } from "../context/Context";
import { useTheme } from "@emotion/react";


const Header = () => {

	const user = useUserContext();

	const theme = useTheme();

	return (
		<>
			<Flex
                pt={'0vh'}
				width={"100%"}
				bg={theme.colors.background}
                h={'auto'}
			>
				<Flex mx={"5vw"} flexDir={'column'} color={theme.colors.text}>
					<Text fontSize={'2rem'}>Total Saving</Text>
					<Text fontSize={"6rem"}>{`$${user.balance === null ? 0 : user.balance}`}</Text>
                    <Text fontSize={'1.6rem'} color={theme.colors.text}>{`Welcome, ${user.name}!`}</Text>
				</Flex>

			</Flex>
		</>
	);
};

export default Header