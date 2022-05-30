import React, { useEffect, useState } from 'react'
import { Text, Grid, Flex} from '@chakra-ui/react'
import Header from '../layouts/Header'
import { useUserContext } from '../context/Context'
import axios from 'axios'
import Container from '../components/Container'
import UserAction from '../components/UserAction'
import Activity from './Activity'

const HomePage = () => {


  const user = useUserContext()

  const [activity, setActivity] = useState([])
  const [balance, setBalance] = useState(0)
  
  useEffect(() => {
    axios({
      method: 'get',
      url:  `http://localhost:3005/users/${user.id}/activity/10`
      }).then(res => {
        setActivity(res.data)
      })
  }, [])

  useEffect(() => {
    axios({
      method: 'get',
      url:  `http://localhost:3005/users/${user.id}/activity/amount/`
      }).then(res => {
        if (res.data.length === 0) {
          setBalance(0)
        } else {
          setBalance(res.data)
        }
      })
    }, [])
    return (
    <>
        <Container>

            <Header balance={balance}/>



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
                <UserAction to='addmoney' icon='money' text='Add income'/>

                <UserAction to='spent' icon='send' text='Add cost'/>
            </Grid>

      



            {/* Activity Historial */}

            <Flex justifyContent={'center'} borderTop={'4px solid black'} borderBottom={'4px solid black'} m={'2vh'}>
              <Text fontSize={'4xl'} color={'#000'}>Last 10 activities.</Text>
            </Flex>  

            
             <Flex
              width={'100%'}
              bg={'#ebebeb'}
              mt={'2vh'}
              borderRadius={'20px'}
              mb={'5vh'}
            >
             
              <Grid
                w={'100%'}
              >
                <Activity activity={activity} />
              </Grid>
            </Flex>




            
      </Container>
    </>
  )
}

export default HomePage