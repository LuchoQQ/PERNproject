import React from 'react'
import { Grid, Icon, Text } from '@chakra-ui/react'
import { BiLineChart, BiLineChartDown } from 'react-icons/bi'
import { GiTakeMyMoney } from 'react-icons/gi'

const NoActivity = () => {

    return (
        <Grid
            justifyContent='center'
            w={'100%'}
            h={'auto'}
        >
            <Icon as={GiTakeMyMoney} fill='#000' justifySelf='center' w='100px' h='100px'/>
            <Text
                fontSize={'4xl'}
                justifySelf='center'
                color='#000'
            >
                No activity yet!, make one!
            </Text>
        </Grid>
    )
}

const Activity = (activity) => {
    
    const arr = []

    function reverse(obj) {
       if (obj.length !== 0) {
            for (let i = obj.length - 1; i >= 0; i--) {
            arr.push(obj[i])
            }
        }
    }
    
    reverse(activity.activity)


  return (
    <>
        {
            arr.length === 0 ? <NoActivity/> : 
            arr.map((item) => {
                return (
                    <Grid
                        justifyContent={'center'}
                        w={'100%'}
                        key={item.id}
                    >
                        <Grid
                            bg={'#fff'}
                            justifyContent={'space-between'}
                            w={['100vw', '100%', '50vw']}
                            borderRadius={'20px'}
                            p={'1rem'}
                            autoFlow={'column'}
                            alignContent={'center'}
                            mb={'2vh'}
                        >
                            <Icon alignSelf={'center'} as={item.transaction === 'ingress' ? BiLineChart : BiLineChartDown } w={'40px'} h={'40px'} fill={'#000'} mx={'1rem'}/>

                            <Text fontSize={'4xl'} alignSelf={'center'} color={'#000'}>{item.description}</Text>
                            <Grid ml={'auto'}>
                                <Text fontSize={'4xl'} color={item.transaction === 'ingress' ? 'green' : 'red'}>{`$${item.amount}`}</Text>
                                <Text fontSize={'2xl'} color={'#000'}>{(item.createdAt).split('T')[0]}</Text>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            })
        }
    </>
  )
}

export default Activity