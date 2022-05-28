import React from 'react'
import { Box, Flex, Grid, Text, theme} from '@chakra-ui/react'
const Activity = ({activity}) => {
    console.log(activity)
  return (
    <>
        {
            activity.map((item) => {
                return (
                    <Grid
                        justifyContent={'center'}
                        w={'100%'}
                    >
                        <Grid
                            mb={'2vh'}
                            bg={'#fff'}
                            w={'500px'}
                            justifyContent={'flex-start'}
                            borderRadius={'20px'}
                        >
                            <Box
                                ml={'5vw'}
                            >
                                <Text color={'#000'} fontSize={'4xl'}>{item.description}</Text>
                                <Box>
                                    <Text color={item.transaction === 'ingress' ? 'green' : 'red'} fontSize={'4xl'}>{`$${item.amount}`}</Text>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                )
            })
        }
    </>
  )
}

export default Activity