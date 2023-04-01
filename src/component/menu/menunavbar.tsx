import { Box, Heading, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import stle from "../../stles/menu.module.css"
import * as Scroll from "react-scroll"
const Menunavbar = () => {
   let Link :any  = Scroll.Link;
  return (
   <Box className={stle.margin} bg={"white"} top={{lg:"80px",md:"75px",sm:"75px"}}position={{lg:"fixed",md:'fixed',sm:"fixed"}}right={{lg:"73%", md:"0px",sm:"0px"}} left={{lg:"200px",md:"0px",sm:"0px"}}>
    <Heading size={{md:"md",sm:"md"}} >KFC MENU</Heading>
   <Box   className={stle.scrollbar}  overflow={{lg:"hidden",md: 'scroll',sm:"scroll"}}>
        <Stack  paddingTop={'15px'} w={'300px'} gap='20px' direction ={{lg: 'column',md: 'row',sm:"row"}}
  divider={<StackDivider borderColor='gray.200' />}>
 <Box w={"auto"}>
    <Text cursor={"pointer"} w={"130px"} >
    <Link  activeStyle={{fontWeight:'bold'}} to="exclusive" spy={true}  offset={50} duration={500}>
      EXCLUSIVE DEAL</Link>
      </Text>
 </Box>
 <Box w={"auto"}>
  <Text cursor={"pointer"} w={"75px"}>
  <Link  activeStyle={{fontWeight:'bold'}} to="chizza" spy={true}  offset={50} duration={500}>CHIZZA</Link>
    </Text>
 </Box>
 <Box w={"auto"}>
  <Text cursor={"pointer"} w={"150px"}>
  <Link  activeStyle={{fontWeight:'bold'}} to="chicken" spy={true}  offset={50} duration={500}>CHICKEN BUCKETS</Link>
    </Text>
    </Box> 
 <Box w={"auto"}>
  <Text cursor={"pointer"} w={"130px"}>
  <Link  activeStyle={{fontWeight:'bold'}} to="newlaunch" spy={true}  offset={50} duration={500}>   NEW LAUNCH</Link>
 </Text>
    </Box> 
 <Box w={"auto"}>
  <Text cursor={"pointer"} w={"140px"}>
  <Link  activeStyle={{fontWeight:'bold'}} to="biriyani" spy={true}  offset={50} duration={500}> BIRYANI BUCKETS</Link>
   </Text>
    </Box> 
 <Box w={"auto"}>
  <Text cursor={"pointer"} w={"100px"}>
  <Link  activeStyle={{fontWeight:'bold'}} to="boxmeal" spy={true}  offset={50} duration={500}> BOX MEALS</Link>
   </Text>
    </Box> 
 <Box w={"auto"}>
  <Text cursor={"pointer"} w={"90px"}>
  <Link  activeStyle={{fontWeight:'bold'}} to="burger" spy={true}  offset={50} duration={500}>   BURGERS</Link>
 </Text>
    </Box> 
 <Box w={"auto"}>
  <Text cursor={"pointer"} w={"90px"}>
  <Link  activeStyle={{fontWeight:'bold'}} to="snack" spy={true}  offset={50} duration={500}>   SNACKS</Link>
 </Text>
    </Box> 
</Stack>
    </Box>
    </Box>  )
    }
export default Menunavbar
