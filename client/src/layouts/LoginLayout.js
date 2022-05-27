import React, { useState } from "react";
import { Button, Flex, FormControl, Grid, Input, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useUpdateUserContext } from "../context/Context";


const LoginLayout = () => {

	const theme = useTheme();

	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const setUser = useUpdateUserContext();

	const onChangeName = (e) => {
		setName(e.target.value)
	}

	const onChangePassword = (e) => {
		setPassword(e.target.value)
	}
	

	const onSubmit = (e) => {
		e.preventDefault()
		setUser({ name, password });
	}

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
					maxW={'720px'}
					height={"100vh"} 
					bg={theme.colors.backgroundSecondary}
					alignItems={"center"}
				>
					<Flex flexDir={'column'} align='center' mt={'5vh'}>
						<Flex bg={'#fff'} w={['100px', '150px','200px']} h={['100px', '150px','200px']} borderRadius={'100%'}/>
						<Text fontSize={'2xl'} mt={'2vh'} fontWeight={''} color={theme.colors.primary}>Welcome!</Text>
					</Flex>
					<Grid
						flexDir={'column'}
						w={['70%', '70%', '50%', '60%']}
						
						mt={'auto'}
						mb={'10vh'}
					>
						<form onSubmit={onSubmit}>
						<FormControl display={'grid'} gap={'4vh'}>
							<Input placeholder='User' variant={'flushed'} type='name' focusBorderColor={theme.colors.primary} onChange={onChangeName}/>
							<Input placeholder='Password'variant={'flushed'} type='password'  focusBorderColor={theme.colors.primary} onChange={onChangePassword}/>
							<Input type={'submit'} mt={'5vh'} size={'lg'} _hover={{ bg: theme.colors.primary }} focusBorderColor='none' />
						</FormControl>
						</form>
					</Grid>
					<Text
						mb={'10vh'}
						_hover= {{
							color: theme.colors.primary,
						}}
					>
						Register here.
					</Text>
					{
						
					}
				</Flex>
			</Grid>
		</>
	);
};

export default LoginLayout;