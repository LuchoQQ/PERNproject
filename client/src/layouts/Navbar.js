import React from 'react'
import { Flex, Grid, Box, Text, Image, Button, Link, Icon, useColorMode, theme} from '@chakra-ui/react'
import MenuLink from '../components/MenuLink'
import { useUserContext } from '../context/Context'
import { useTheme } from '@emotion/react'

const Navbar = () => {

    const name = useUserContext().name

    const theme = useTheme()

    return (
    <>
        <Grid
            justifyContent={'flex-end'}
            fontFamily={theme.fonts.text.Spartan}
            py={'1vh'}
            h={'auto'}
            width={'100%'}
            autoFlow={'column'}
            alignItems={'center'}
            bg={theme.colors.primary}
        >
            <Text
                mr={'2vw'}
                fontSize={['1rem', '1.5rem']}
                color={theme.colors.backgroundSecondary}
            >{` ${name}`}</Text>
            
            <Flex w={'50px'} h={'50px'} borderRadius={'100%'} bg={theme.colors.backgroundSecondary}/>
        </Grid>
    </>
  )
}

export default Navbar