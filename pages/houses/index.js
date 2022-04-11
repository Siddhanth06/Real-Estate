import React from 'react';
import { createClient } from '@supabase/supabase-js'
import { Container, Flex, Grid, Image, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import { FaCity, FaHome, FaLocationArrow, FaRegAddressBook, FaSearchLocation } from 'react-icons/fa';
import { BiCurrentLocation, BiHomeCircle, BiLocationPlus, BiRupee } from 'react-icons/bi';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';

// Create a single supabase client for interacting with your database 

const Houses = ({data}) => {
  const route=useRouter();
    console.log("data" ,data);
  return<>
  <Text fontSize={"2xl"} mt={"3"} ml="4" fontWeight="bold">New Listings</Text>
  <Grid templateColumns={{sm:'repeat(2, 2fr)',md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)","2xl":"repeat(6, 1fr)"}}   px={6} py={4}  gap={6}>{data.map((item)=>{
     return<Container onClick={(e)=>{
      
      route.push(`/houses/${item.property_id}`);
     }} shadow={useColorModeValue("1px 6px 15px #9E9E9E;","")} maxHeight="300px" maxWidth={"410px"}  _hover={{transform:"scale(1.06)",transitionDuration:"300ms",zIndex:"3"}}  rounded={"lg"}  overflow="hidden" bgColor={useColorModeValue("gray.100","teal.400")} key={item.property_id} width={"100%"}  m={0} p={0} height="50vh" >
         <Flex flex={1} h={"60%"}   ><Image  height={"100%"} width="100%" src={item.main_image} alt={item.property_id} key={item.property_id} ></Image></Flex>
         <Flex flex={2} h={"30%"} p={2} ><VStack alignItems={"start"}>
           
         <Stack direction={"row"} className="flex items-center justify-center" ><FaHome/> <Text fontSize={"md"} fontWeight="semibold" color={useColorModeValue("gray.900","white")} >{item.title}</Text></Stack>
          <Stack direction={"row"}  className="flex items-center justify-center"><BiRupee/><Text fontSize={"sm"} color={useColorModeValue("gray.900","white")} >{item.price}</Text></Stack>
          <Stack direction={"row"}  className="flex items-center justify-center"><BiLocationPlus/><Text  fontSize={"sm"} color={useColorModeValue("gray.500","white")} >{item.address}</Text> </Stack>

           </VStack></Flex>
     </Container> 
  })}</Grid>
  </>  ;
};

export default Houses;

  

