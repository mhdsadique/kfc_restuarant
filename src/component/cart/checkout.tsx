import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
// import { Totalsume } from './data'
let totalsum=0

export const Checkout = () => {
    var sum1=localStorage.getItem("sum")
    const rout=useRouter()
 let sum=Number(sum1)
console.log(typeof(sum))
let gst=(Number(sum)*5)/100
  totalsum=Math.ceil(gst+sum)
 console.log(typeof(gst))
 console.log(totalsum)
  return (
    <Box display={'grid'}gap='20px' position="relative"  boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <Heading>ITEMS</Heading>
        <Box>
            <Flex justifyContent={'space-between'}>
        <Heading size={"md"}>Subtotal</Heading>
        <Heading size={"md"}>   {
            new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(sum)
        }
        </Heading>
            </Flex></Box>
        <Box position="relative">
            <Flex justifyContent={'space-between'}>
        <Heading size={"md"}>GST</Heading>
        <Heading size={"md"}>5%</Heading>
            </Flex></Box>

        <Button onClick={()=>rout.push("/checkout")} position={"fixed"}display={{lg:"none",md:"block",sm:"block"}} bottom="0px"left='25%'right='50%' bg='#e4002b' w='50%' borderRadius={'25px'}>CHECKOUT - {totalsum} </Button>
        <Button onClick={()=>rout.push("/checkout")} marginLeft={'auto'} marginRight='auto' marginTop={'auto'}  bg='#e4002b' w='200px' borderRadius={'25px'}>CHECKOUT - {totalsum}</Button>
    </Box>
  )
}
