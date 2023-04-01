import React from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
export const Emty = () => {
    const rout=useRouter()
  return (
    <Box  margin={'70px auto auto auto'}>
    <Flex>
    <Box>
    <Heading>YOUR CART IS EMPTY. LETS START AN ORDER!</Heading>
<Button onClick={()=>rout.push("/menu")} marginTop={'30px'}  marginLeft={'auto'} marginRight='auto' bg='#e4002b' w='200px' borderRadius={'25px'}>Start Order</Button>
    </Box>
<img alt='cartnunll' src={'https://online.kfc.co.in/static/media/empty_cart.32f17a45.png'}/>   

    </Flex>
     </Box>
  )
}
