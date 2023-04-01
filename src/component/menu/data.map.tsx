import { getProduct } from '@/redux/product/action'
import { Product, ProductState } from '@/utills/types'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { Datascompo } from './data'
import stle from "../stles/menu.module.css"
export const Datamap = ({data}:any) => {
  const chizza:Product[]=[]
  const exclusivedeal :Product[]=[]
  const chickenbuckets:Product[]=[]
  const newlaunch:Product[]=[]
  const biriyanibuckets:Product[]=[]
  const boxmeals:Product[]=[]
  const burgers:Product[]=[]
  const snacks:Product[]=[]
    data?.map((e:Product)=>{e.menu==="chizza"? chizza.push(e):
     e.menu==="exclusive deal"?exclusivedeal.push(e):
     e.menu==="chicken buckets"?chickenbuckets.push(e):
     e.menu==="new launch"?newlaunch.push(e):
     e.menu==="biriyani buckets"?biriyanibuckets.push(e):
     e.menu==="box meals"?boxmeals.push(e):
     e.menu==="burgers"?burgers.push(e):
     e.menu==="snacks"?snacks.push(e):""
    })
  return (<Box  margin={{lg:'auto auto auto 302px',md:"auto auto auto auto",sm:"auto auto auto auto"}}>
    <Box >
<Heading marginBottom={'10px'} id='exclusive' size={'md'}>EXCLUSIVE DEAL</Heading>
<SimpleGrid gap={'10px'} columns={{lg:3,md:1,sm:1}}>
 {
exclusivedeal?.map((e: Product,i )=>(<Datascompo key={i} {...e}/>))
 }
</SimpleGrid>
</Box>
<Box >
<Heading marginBottom={'10px'}marginTop='40px' id='chizza' size={'md'}>CHIZZA</Heading>
<SimpleGrid gap={'10px'} columns={{lg:3,md:1,sm:1}}>
 {
chizza?.map((e: Product,i )=>(<Datascompo key={i} {...e}/>))
 }
</SimpleGrid>
</Box>

<Box >
<Heading id='chicken' size={'md'}  marginBottom={'10px'}marginTop='40px'>CHICKEN BUCKETS</Heading>
<SimpleGrid gap={'10px'} columns={{lg:3,md:1,sm:1}}>
 {
chickenbuckets?.map((e: Product,i )=>(<Datascompo key={i} {...e}/>))
 }
</SimpleGrid>
</Box>

<Box >
<Heading id='newlaunch' size={'md'} marginBottom={'10px'}marginTop='40px'>NEW LAUNCH</Heading>
<SimpleGrid gap={'10px'} columns={{lg:3,md:1,sm:1}}>
 {
newlaunch?.map((e: Product,i )=>(<Datascompo key={i} {...e}/>))
 }
</SimpleGrid>
</Box>

<Box >
<Heading id='biriyani' size={'md'} marginBottom={'10px'}marginTop='40px'>BIRIYANI BUCKETS</Heading>
<SimpleGrid gap={'10px'} columns={{lg:3,md:1,sm:1}}>
 {
biriyanibuckets?.map((e: Product,i )=>(<Datascompo key={i} {...e}/>))
 }
</SimpleGrid>
</Box>

<Box >
<Heading id='boxmeal' size={'md'} marginBottom={'10px'}marginTop='40px'>BOX MEALS</Heading>
<SimpleGrid gap={'10px'} columns={{lg:3,md:1,sm:1}}>
 {
boxmeals?.map((e: Product,i )=>(<Datascompo key={i} {...e}/>))
 }
</SimpleGrid>
</Box>

<Box >
<Heading id='burger' size={'md'} marginBottom={'10px'}marginTop='40px'>BURGERS</Heading>
<SimpleGrid gap={'10px'} columns={{lg:3,md:1,sm:1}}>
 {
burgers?.map((e: Product,i )=>(<Datascompo key={i} {...e}/>))
 }
</SimpleGrid>
</Box>

<Box >
<Heading id='snack' size={'md'} marginBottom={'10px'}marginTop='40px'>SNACKS</Heading>
<SimpleGrid gap={'10px'} columns={{lg:3,md:1,sm:1}}>
 {
snacks?.map((e: Product,i )=>(<Datascompo key={i} {...e}/>))
 }
</SimpleGrid>
</Box>
</Box>)
}
