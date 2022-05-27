import React from 'react'
import { Flex, Grid, Box, Text, Image, Button, Link, Icon, useColorMode } from '@chakra-ui/react'
import MenuLink from '../components/MenuLink'


const Navbar = () => {
  return (
    <>
        <Flex
            justifyContent={'space-around'}
        >
            <Icon />
            <Grid
                autoFlow={'column'}
                gap={'5vw'}
            >
                <MenuLink path={'/'} name={'home'}/>
                <MenuLink path={'/user'} name={'user'}/>
                <MenuLink path={'/activities'} name={'activities'}/>
            </Grid>

        </Flex>
    </>
  )
}

export default Navbar