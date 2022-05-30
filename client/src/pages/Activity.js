import React from 'react'
import { Grid, Icon, Text, theme} from '@chakra-ui/react'
import { BiLineChart, BiLineChartDown } from 'react-icons/bi'

const Activity = (activity) => {
    
    const arr = []

    function reverse(obj) {
        const newObj = {}
        obj.map(item => {
            arr.push(item)
        })
        return arr.reverse()
    }
    
    reverse(activity.activity)


  return (
    <>
        {
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