
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react'
import React from 'react'

 const Error = () => {
  return (
    <Box>
        
<Alert
  status='error'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='400px'
>
  <AlertIcon boxSize='50px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Something Went Wrong!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Did not get you please try again
  </AlertDescription>
</Alert>
    </Box>
  )
}
export default Error
