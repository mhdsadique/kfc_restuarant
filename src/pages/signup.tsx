
import React from 'react'
import {
  Flex,Box,FormControl,FormLabel,Input,
  InputGroup,HStack,InputRightElement,
  Stack,Button,Heading,Text,
  useColorModeValue,Link, useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Login } from '@/component/navbar';

export default function Signup() {
  const toast = useToast()
  const [showPassword, setShowPassword] = useState(false);
  const [firstName,setFirstname]=useState("")
  const [lastName,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const signupdata={
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password
  }
  const submitdata=()=>{
    
    axios.post("https://smoggy-sheath-dress-fish.cyclic.app/users/register",signupdata)
    .then( (response)=> {
      console.log(response);
      toast({
        position: 'top',
        title: 'Sing up successfully.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    })
    .catch((error) =>{
      console.log(error);
      toast({
        position: 'top',
        title: 'Something Went Wrong.',
        description: "Please Check Again.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    });
  
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input onChange={(e)=>setFirstname(e.target.value)}placeholder='firstName'value={firstName}type="text"/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input onChange={(e)=>setLastname(e.target.value)}placeholder='lastname'value={lastName} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input onChange={(e)=>setEmail(e.target.value)}placeholder='email'value={email} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input onChange={(e)=>setPassword(e.target.value)}placeholder='password'value={password} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button onClick={submitdata}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Button color={'blue.400'} align='center'>
    
                Already a user?
              </Button>
              <Login/>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}