
import {  Box, Flex, Text, IconButton,
    Button, Stack, Collapse,  Icon, Link,
  Popover, PopoverTrigger,  PopoverContent,  useColorModeValue,
    useBreakpointValue, useDisclosure, useToast, } from '@chakra-ui/react';
  import {HamburgerIcon,
    CloseIcon,ChevronDownIcon, ChevronRightIcon,
  } from '@chakra-ui/icons';
  import {
    Modal, ModalOverlay,  ModalContent,  ModalHeader,
    ModalFooter,  ModalBody,  ModalCloseButton,
    FormControl,  FormLabel,  Input } from '@chakra-ui/react'
  import React from 'react'
import Image from 'next/image';
import kfc from "../../image/kfc-logo.png"
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
  export default function Navbar() {
    const router=useRouter()
    const { isOpen, onToggle } = useDisclosure();

    const gotocart=()=>{
let token =localStorage.getItem("token")
      if(token){
        router.push("/cart")
      }else{
        router.push("/signup")

      }
    }
    return (
      <Box >
        <Flex zIndex={5}
          position='fixed' right={'0px'}left='0px' top='0px'
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          >
          <Flex   
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex marginLeft={'15%'} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Link href="/">
          <Image   src={kfc} 
         alt="kfc Logo"  width={80}
         height={10}
         priority />
         </Link>
  
            <Flex justifyContent={"center"}alignItems="center" display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack marginRight={'15%'}
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Login/>
            <Button
              as={'a'}

              href={'signup'}
             >
              Sign Up
            </Button>

            <Image style={{cursor:"pointer"}} onClick={gotocart} width={35}height={35} src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="crtlogo"  />
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} display='flex' justifyContent='space-between'>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
        >
        <Stack  direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack  zIndex={4} position='fixed' marginTop={"60px"}
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack   zIndex={4} boxShadow='md' p='6' rounded='md' bg='white' w={'100px'} marginTop={"0px"} spacing={4} onClick={children && onToggle}  >
     <Flex   py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',}}>
          <Text 
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6} />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }} >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link  zIndex={'banner'} key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
  
      label: 'MENU',
      href: '/menu',
    },
    {
      label: 'DEALS',
      href: '/deals',
    },
  ];


  
export const Login=()=> {

  const toast = useToast()
  const [email,setEmail]=React.useState("")
  const [password,setPassword]=React.useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const router=useRouter()
   const logindat={
    email:email,
    password:password
   }
   const logindata=()=>{
    axios.post("https://smoggy-sheath-dress-fish.cyclic.app/users/login",logindat)
    .then( (response:any)=> {
      localStorage.setItem("token",response.data.token);
      console.log(response);
      if(response.data.token){
        toast({
          position: 'top',
          title: 'Login successful.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
 if(email=="kfcadmin@gmail.com"&&password==1234){
  toast({
    position: 'top',
    title: 'Welcome To Admin Page.',
    description: "You Are Admin Welcome To Admin Page.",
    status: 'success',
    duration: 8000,
    isClosable: true,
  })
      router.push("/admin")}
       else{
      router.push("/menu")}
      }
      else{
        toast({
          position: 'top',
          title: 'Something Went Wrong.',
          description: "Please Check Again or Signup First.",
          status: 'error',
          duration: 8000,
          isClosable: true,
        })
        router.push("/signup")
      }

    })
    .catch((error) =>{
      console.log(error);
      toast({
        position: 'top',
        title: 'Something Went Wrong.',
        description: "Please Check Again.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      router.push("/signup")
    });
   }
  
  return (
    <>
      <Button onClick={onOpen}
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              cursor='pointer'
              variant={'link'}>
              Sign In
            </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input onChange={(e)=>setEmail(e.target.value)}value={email} ref={initialRef} placeholder='Email' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input onChange={(e)=>setPassword(e.target.value)}value={password} placeholder='Password' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={logindata}>
              Log In
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
