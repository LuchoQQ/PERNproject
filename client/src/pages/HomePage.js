import React from 'react'
import { Text, Grid, Flex, Box } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import Navbar from '../layouts/Navbar'
import { useUserContext } from '../context/Context'
const HomePage = () => {

  const theme = useTheme()
  const user = useUserContext()
  console.log(user)
  return (
    <>
        <Grid
          width={'100vw'}
          height={'100vh'}
          bg={theme.colors.background}
          justifyContent={'center'}
          fontFamily={theme.fonts.text.Spartan}
        >
          <Flex
            width={['100vw', '100vw', '50vw', '50vw']}
            height={'100vh'}
            bg={theme.colors.backgroundSecondary}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Navbar />
            <Flex
              width={'80%'}
              height={'20vh'}
              bg={'#fff'}
              mt={'2vh'}
              borderRadius={'20px'}
            >
              <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
              >
                <Text color={'#202020'} fontSize={['1rem', '1.2rem']}>Dinero disponible</Text>
                <Text color={'#202020'} fontSize={['1.2rem', '1.5rem']}>{user.balance === null ? 0 : user.balance}</Text>
              </Flex>
            </Flex>
            <Flex
              width={'80%'}
              height={'20vh'}
              bg={'#fff'}
              mt={'2vh'}
              borderRadius={'20px'}
            >
              <Grid
                autoFlow={'column'}
                width={'100%'}
                height={'100%'}
                alignItems={'center'}
                ml={'20%'}
              >
                <Box width='20%' h={'20%'} bg={'#000'}>

                </Box>
                <Box width='20%' h={'20%'} bg={'#000'}>

                </Box>
              </Grid>
            </Flex>




          </Flex>
        </Grid>
    </>
  )
}

export default HomePage