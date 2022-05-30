import { Flex, FormControl, Grid, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import axios from 'axios'
import { useUpdateUserContext, useUserContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import Navbar from '../layouts/Navbar'

const AddMoney = () => {
    const theme = useTheme()
    const userContext = useUserContext()
    const updateUser = useUpdateUserContext()
    const navigate = useNavigate()
    
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
   
    const onDescription = (e) => {
        setDescription(e.target.value)
    }

    const onAmount = (e) => {
        setAmount(e.target.value)
    }

    
    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            transaction: "ingress",
            description: description,
            amount: amount,
            user_id: userContext.id
        }
        console.log(data)

        //post activity
        axios({
            method: 'post',
            url: 'http://localhost:3005/activity',
            data: data,

        })
        //update balance user
        axios({
            method: 'put',
            url: `http://localhost:3005/users/${userContext.id}`,
            data: {
                balance: userContext.balance + parseInt(amount)
            }
        }).then(() => {
            updateUser({
                ...userContext,
                balance: userContext.balance + parseInt(amount)
            })
            navigate(-1)
        })
    }

  return (
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
                <Text justifyContent={'center'} mb={'10vh'} fontSize={'4xl'}>Add a income!</Text>

                    <form onSubmit={onSubmit}>
                        <FormControl style={{ display: 'grid', gap: '10vh' }}>
                            <Input placeholder='Income description' id='concept' onChange={onDescription} variant='flushed'></Input>
                            <Input placeholder='Amount' id='amount' onChange={onAmount} variant='flushed'></Input>
                            <Input type='submit'></Input>
                        </FormControl>
                    </form>
            </Flex>
          </Flex>
        </Grid>
  )
}

export default AddMoney