import React, { useEffect, useState } from 'react'
import { Text, Grid, Flex, Box, Icon, Button } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import Navbar from '../layouts/Navbar'
import { useUserContext } from '../context/Context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import UserAction from '../components/UserAction'
import Activity from './Activity'

const HomePage = () => {
  const theme = useTheme()
  const user = useUserContext()
  const navigate = useNavigate()
  const [activity, setActivity] = useState([])

  const handleClick = () => {
    navigate('/activity')
  }

  useEffect(() => {
    axios({
      method: 'get',
      url:  `http://localhost:3005/users/${user.id}/activity`
    }).then(res => {
      setActivity(res.data)
  })}, [])


  return (
    <>
        <Container>
            <Navbar />






            {/* User Actions */}
           
            <Flex justifyContent={'center'} borderBottom={'4px solid black'} m={'2vh'}>
              <Text fontSize={'4xl'} color={'#000'}>Some actions!.</Text>
            </Flex>


            <Grid
              autoFlow={'column'}
              width={'100%'}
              justifyContent={'center'}
              gap={'10vw'}
              my={'5vh'}
            >
                
                <UserAction to='addmoney' icon='money' text='Money'/>

                <UserAction to='spent' icon='send' text='Spent'/>
            </Grid>

            








            {/* Transactions */}

            <Flex justifyContent={'center'} borderTop={'4px solid black'} borderBottom={'4px solid black'} m={'2vh'}>
              <Text fontSize={'4xl'} color={'#000'}>Your Activity.</Text>
            </Flex>

            
             <Flex
              width={'100%'}
              bg={'#ebebeb'}
              mt={'2vh'}
              borderRadius={'20px'}
              height={'60%'}
              mb={'5vh'}
            >
             
              <Grid
                w={'100%'}
              >
                <Activity activity={activity}/>
              </Grid>
            </Flex>
      </Container>
    </>
  )
}

export default HomePage