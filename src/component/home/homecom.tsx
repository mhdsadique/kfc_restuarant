import { Box, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

export const Homebox = (prop) => {
  const rout=useRouter()
  return (
    
    <Box cursor={'pointer'} onClick={()=>rout.push("/menu")}>
        <img src={prop.src} alt={prop.title}/>
        <Heading size={'md'}>{prop.title}</Heading>
    </Box>
  )
}
