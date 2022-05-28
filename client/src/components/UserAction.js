import React from "react";
import { Box, Icon, Text } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { MdOutlineSendToMobile } from 'react-icons/md'
import { BsCashCoin } from 'react-icons/bs'

const UserAction = ({to, icon, text}) => {
    const navigate = useNavigate();
	return (
		<>
			<Box
				flexDir={"column"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				bg={"#fff"}
				borderRadius={"20px"}
				p={'2rem'}
				boxShadow={"0px 0px 5px #000"}
				transition={"all 0.1s ease-in-out"}
				_hover={{ transform: "scale(1.1)" }}
				onClick={() => navigate(`/${to}`)}
			>
				<Text fontSize={'3xl'}color={"#000"}>{text}</Text>
			</Box>
		</>
	);
};

export default UserAction;
