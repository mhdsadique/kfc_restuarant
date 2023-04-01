
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react'
import React from 'react'

export const Errors = () => {
  return (
    <Box>
        
<Alert
  status='error'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='300px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Something Went Wrong!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Please Keep Refreshing
  </AlertDescription>
</Alert>
    </Box>
  )
}
