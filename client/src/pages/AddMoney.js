import { Button, Flex, FormControl, Grid, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import Navbar from '../layouts/Navbar'
import axios from 'axios'
import { useUpdateUserContext, useUserContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'

const AddMoney = () => {
    const theme = useTheme()
    const userContext = useUserContext()
    const updateUser = useUpdateUserContext()
    const navigate = useNavigate()
    const [concept, setConcept] = useState('')
    const [amount, setAmount] = useState('')
   
    const onChangeConcept = (e) => {
        setConcept(e.target.value)
    }

    const onChangeAmount = (e) => {
        setAmount(e.target.value)
    }

    
    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            transaction: "ingress",
            description: concept,
            from: null,
            to: null,
            amount: amount,
            user_id: userContext.id
        }
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
                balance: parseInt(userContext.balance) + parseInt(amount)   
            }
        }).then(
            updateUser({ ...userContext, balance: parseInt(userContext.balance) + parseInt(amount) })
            
        )

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
                <Text justifyContent={'center'} mb={'10vh'} fontSize={'4xl'}>Send Money!</Text>

                    <form onSubmit={onSubmit}>
                        <FormControl style={{ display: 'grid', gap: '10vh' }}>
                            <Input placeholder='Asunt' id='concept' onChange={onChangeConcept} variant='flushed'></Input>
                            <Input placeholder='Amount' id='amount' onChange={onChangeAmount} variant='flushed'></Input>
                            <Input type='submit'></Input>
                        </FormControl>
                    </form>
            </Flex>
          </Flex>
        </Grid>
  )
}

export default AddMoney