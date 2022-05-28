import React from 'react'
import { useTheme } from '@emotion/react'
import { Grid, Flex, Text } from '@chakra-ui/react'
const Container = ({ children }) => {

    const theme = useTheme()

  return (
    <>
        <Grid
          width={'100vw'}
          height={'auto'}
          bg={theme.colors.backgroundSecondary}
          fontFamily={theme.fonts.text.Dongle}
          justifyContent={'center'}
        >
          {/* CONTAINER */}
          <Flex
            width={['100vw', '100vw', '50vw', '50vw']}
            bg={theme.colors.text}
            flexDir={'column'}
            h={'auto'}
          >
              {children}
          </Flex>
        </Grid>
    </>
  )
}

export default Container