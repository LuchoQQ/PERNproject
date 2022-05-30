import { Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
const Navbar = () => {

    const handleClick = () => {
        window.history.back()
    }


  return (
    <Flex
        h={'7vh'}
        width={'100%'}
        bg={'#fff'}
        align='center'
    >
        <Icon as={AiOutlineArrowLeft} w={'50px'} h={'50px'}  fill={'#000'} ml={'2vw'} onClick={handleClick}/>
    </Flex>
  )
}

export default Navbar