import { Box, Button } from '@chakra-ui/react'
import React from 'react'

export const Offerdiv = (prop:any) => {
  return (
    <Box style={{ width:'400px',height:"400px"}}textAlign={'center'} >
        <img style={{width:"100%",height:"90%"}} src={prop.src} alt={"div"} />
        <Button margin='auto'  borderRadius={"30%"}>Redeem</Button>
    </Box>
  )
}
