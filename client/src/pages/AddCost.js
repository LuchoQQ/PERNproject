import { Button, Flex, FormControl, Grid, Input, Text } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import { useUpdateUserContext, useUserContext } from '../context/Context'
import Navbar from '../layouts/Navbar'

const AddCost = () => {

    const theme = useTheme()
    const userContext = useUserContext()
    const updateUser = useUpdateUserContext()
    const navigate = useNavigate()
    
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
   
    const onDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangeAmount = (e) => {
        setAmount(e.target.value)
    }



    const onSubmit = (e) => {
        e.preventDefault()

        const data = {
            transaction: "egress",
            description: description,
            from: userContext.name,
            amount: amount,
            user_id: userContext.id,
        }

        axios({
            method: 'post',
            url: 'http://localhost:3005/activity',
            data: data,
        }).then(() => {
            updateUser({
                balance: parseInt(userContext.balance) - parseInt(amount)
            })
            navigate('/')
        })
    }



  return (
    <Container>
        <Grid
          width={'100vw'}
          height={'100vh'}
          bg={theme.colors.background}
          justifyContent={'center'}
          fontFamily={theme.fonts.text.Spartan}
        >
          {/* CONTAINER */}
          <Flex
            width={['100vw', '100vw', '50vw', '50vw']}
            height={'100vh'}
            bg={theme.colors.backgroundSecondary}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Navbar />
            {/* Send money form */}
            <Flex
                justify={'center'}
                flexDir={'column'}
                mt={'5vh'}
            >
                <Text justifyContent={'center'} mb={'10vh'} fontSize={'4xl'}>Send Money!</Text>

                    <form onSubmit={onSubmit}>
                        <FormControl style={{ display: 'grid', gap: '10vh' }}>
                            <Input placeholder='Cost description' id='concept' onChange={onDescription} variant='flushed'></Input>
                            <Input placeholder='Amount' id='amount' onChange={onChangeAmount} variant='flushed'></Input>
                            <Input type='submit'></Input>
                        </FormControl>
                    </form>
            </Flex>
          </Flex>
        </Grid>
    </Container>
  )
}

export default AddCost