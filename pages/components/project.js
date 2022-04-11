import React from 'react';
import { createClient } from '@supabase/supabase-js'
import { Button, Container, Flex, Grid, Image, Stack, Text, useColorModeValue, useStyles, VStack } from '@chakra-ui/react';
import { MoonIcon, SearchIcon } from '@chakra-ui/icons';
import { FaCity, FaHome, FaLocationArrow, FaRegAddressBook, FaSearchLocation } from 'react-icons/fa';
import { BiCurrentLocation, BiHomeCircle, BiLocationPlus, BiRupee } from 'react-icons/bi';
import CustomScroll from 'react-custom-scroll';
import { size } from 'lodash';
// Create a single supabase client for interacting with your database 

const Projects = () => {
  var  projectdata=[
        {
          property_id: '8b8e292f-7b98-4633-a7d3-0afbb99c5ddb',
          title: '1BHK',
          city: 'Dombivli',
          price: 1500000,
          address: 'Dombivli,West,Kalyan',
          bathrrom: 1,
          bedroom: 1,
          type: 'House',
          price_range: '15',
          phone_number: 9890868766,
          seller_name: 'Siddhanth',
          seller_email: 'abc@gmail.com',
          main_image: 'https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/8b8e292f-7b98-4633-a7d3-0afbb99c5ddb/main.jpg',
          sq_ft: 500,
          sellers_id: 'b7328890-4b33-4425-9c71-482f3b6ea7a2'
        },
        {
          property_id: 'e3e31a7d-6246-407b-8d76-7286137d5f8b',
          title: '2BHK',
          city: 'Thane',
          price: 1900000,
          address: 'Thane ,west',
          bathrrom: 2,
          bedroom: 2,
          type: 'House',
          price_range: '15-20',
          phone_number: 6579351272,
          seller_name: 'Vishal',
          seller_email: 'vishal@gamail.com',
          main_image: 'https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/e3e31a7d-6246-407b-8d76-7286137d5f8b/main.jpg',
          sq_ft: 900,
          sellers_id: '995b84ab-c466-46c1-b5f9-9a0432a31920'
        },
        {
          property_id: '1a8b3845-c753-4698-ac00-c3e7e5d5c3d3',
          title: '3 BHK ',
          city: 'Andheri',
          price: 8000000,
          address: 'Andheri West, Kalyan',
          bathrrom: 2,
          bedroom: 3,
          type: 'House',
          price_range: '40L - 50L',
          phone_number: 7695789043,
          seller_name: 'Nihal',
          seller_email: 'nihal321@gmail.com',
          main_image: 'https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/1a8b3845-c753-4698-ac00-c3e7e5d5c3d3/main.webp',
          sq_ft: 1200,
          sellers_id: '439dd396-0faf-4307-8918-fe2cb60782cf'
        },
        {
          property_id: '4af2d212-3273-4833-a7cf-5899fa684e53',
          title: '1 BHK',
          city: 'Badlapur',
          price: 2000000,
          address: 'Badlapur West, Mumbai',
          bathrrom: 2,
          bedroom: 1,
          type: 'House',
          price_range: '20L - 30L',
          phone_number: 7649873758,
          seller_name: 'Kishor',
          seller_email: 'kishor@gmail.com',
          main_image: 'https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/4af2d212-3273-4833-a7cf-5899fa684e53/main.webp',
          sq_ft: 700,
          sellers_id: '3288253c-06ac-4028-8fd7-640e6cd3cd21'
        },
        {
          property_id: 'cde706f8-a785-4eed-bf4c-3dca82e3ec79',
          title: '2 BHK',
          city: 'khandivli',
          price: 7000000,
          address: 'Khandivli West, Mumbai',
          bathrrom: 2,
          bedroom: 2,
          type: 'House',
          price_range: '70L - 80L',
          phone_number: 9348576378,
          seller_name: 'Manoj',
          seller_email: 'manoj657@gmail.com',
          main_image: 'https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/cde706f8-a785-4eed-bf4c-3dca82e3ec79/main.webp',
          sq_ft: 800,
          sellers_id: '6288258d-32fe-4353-afa5-142c7895aba5'
        },
        {
          property_id: '8b7cd6f3-9888-439f-b9c5-71d9a96c397b',
          title: '3 BHK',
          city: 'Borivali',
          price: 8500000,
          address: 'Borivali east , Mumbai',
          bathrrom: 3,
          bedroom: 3,
          type: 'House',
          price_range: '80L - 90L',
          phone_number: 8867540982,
          seller_name: 'Santosh',
          seller_email: 'santosh34@gmail.com',
          main_image: 'https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/8b7cd6f3-9888-439f-b9c5-71d9a96c397b/main.webp',
          sq_ft: 1500,
          sellers_id: '00eab1b5-1d04-49ec-9d6a-cd169c655d08'
        },
        {
          property_id: 'eec49638-83fa-43d8-b583-a9784554daa5',
          title: '4 BHK',
          city: 'Ghatkopar',
          price: 10000000,
          address: 'Ghatkopar West, Mumbai',
          bathrrom: 3,
          bedroom: 4,
          type: 'House',
          price_range: '90 L - 1 Cr',
          phone_number: 8739846633,
          seller_name: 'Vishnu',
          seller_email: 'vishnu@gmail.com',
          main_image: 'https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/eec49638-83fa-43d8-b583-a9784554daa5/main.webp',
          sq_ft: 3000,
          sellers_id: '2b2ceead-0e14-4b76-9fb6-886e03c9f31d'
        }
      ];
    console.log("data in project data",projectdata);
    
    return ( 

        <>
        <Text fontSize={"3xl"} ml="3" mt={"5"} fontWeight="bold">Featured Projects</Text>
        <Stack overflowX={"scroll"}
        
        px={{base
          :4,md:"8"}}
        css={{
    '&::-webkit-scrollbar': {
      width: '0px',
    },
    
    '&::-webkit-scrollbar-track': {
      width: '0px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: "white",
      display:"none",
      borderRadius: '0px',
    },
  }}  overflowY={"hidden"} direction="row" spacing={{base:4,md:8}} scrollBehavior={'smooth'} className='snap-x flex  scroll h-[90vh] w-[100%]  overflow-x-scroll  overflow-y-hidden snap-mandatory' my="4" >
         <div className=' flex-shrink-0 h-screen w-[70vw] snap-center'> <Stack  bgPos={"center"}  overflow="hidden" bgImage={"linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.68)),url(/assets/images/Project1/main.jpg)"} bgRepeat="no-repeat"  bgSize={{base:"auto",md:"100% 100%"}}  width={"100%"} height={"100%"} position="relative" > <Container color="white"   width={"100%"}  fontSize={"lg"} padding={0} margin={0}  className='relative top-[60%] ' left={{base:4,sm:10}}    > <div className='flex items-center'><BiRupee/> <Text >1.18 cr -1.55cr</Text></div>
        <Text fontSize={{base:"sm",md:"lg"}} className='flex items-center'  >Runwal Gardens</Text>
        <Text fontSize={{base:"sm",md:"lg"}}  className='flex items-center'>Dombivli (E),Manpada express highway. </Text>
        <Button _focus={{
          bgColor:"teal.600"
       
        }} size='md' leftIcon={<SearchIcon/>}  mt={3} px={9} _hover={{bgColor:"teal.600",transform:"scale(1.1)", }} bgColor={"teal.400"}>Explore</Button>
         </Container></Stack></div>
         <div className=' flex-shrink-0 h-screen w-[70vw] snap-center'> <Stack  bgPos={"center"}  overflow="hidden" bgImage={"linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.68)),url(/assets/images/Project2/main.png)"} bgRepeat="no-repeat"  bgSize={{base:"auto",md:"100% 100%"}}  height={"100%"} position="relative" > <Container color="white"   width={"100%"}  fontSize={"lg"} padding={0} margin={0}  className='relative top-[60%]'  left={{base:4,sm:10}}  > <div className='flex items-center'><BiRupee/> <Text >1.18 cr -1.55cr</Text></div>
        <Text fontSize={{base:"sm",md:"lg"}} className='flex items-center'  >Raheja Reserve</Text>
        <Text fontSize={{base:"sm",md:"lg"}}  className='flex items-center'>Pune, Manpada express highway. </Text>
        <Button _focus={{
          bgColor:"teal.600"
       
        }} size='md' leftIcon={<SearchIcon/>}  mt={3} px={9} _hover={{bgColor:"teal.600",transform:"scale(1.1)", }} bgColor={"teal.400"}>Explore</Button>
         </Container></Stack></div>
        
         <div className=' flex-shrink-0 h-screen w-[70vw] snap-center'> <Stack  bgPos={"center"}  overflow="hidden" bgImage={"linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.68)),url(/assets/images/Project3/main.jpg)"} bgRepeat="no-repeat"  bgSize={{base:"auto",md:"100% 100%"}}  height={"100%"} position="relative" > <Container color="white"   width={"100%"}  fontSize={"lg"} padding={0} margin={0}  className='relative top-[60%]'  left={{base:4,sm:10}}  > <div className='flex items-center'><BiRupee/> <Text >1.18 cr -1.55cr</Text></div>
        <Text fontSize={{base:"sm",md:"lg"}} className='flex items-center'  >VBHC Greenwoods</Text>
        <Text fontSize={{base:"sm",md:"lg"}}  className='flex items-center'>Dombivli (E),Manpada express highway. </Text>
        <Button _focus={{
          bgColor:"teal.600"
       
        }} size='md' leftIcon={<SearchIcon/>}  mt={3} px={9} _hover={{bgColor:"teal.600",transform:"scale(1.1)", }} bgColor={"teal.400"}>Explore</Button>
         </Container></Stack></div>
         <div className=' flex-shrink-0 h-screen w-[70vw] snap-center'> <Stack  bgPos={"center"}  overflow="hidden" bgImage={"linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.68)),url(/assets/images/Project4/main.jpg)"} bgRepeat="no-repeat"  bgSize={{base:"auto",md:"100% 100%"}}  height={"100%"} position="relative" > <Container color="white"   width={"100%"}  fontSize={"lg"} padding={0} margin={0}  className='relative top-[60%]'  left={{base:4,sm:10}}  > <div className='flex items-center'><BiRupee/> <Text >1.18 cr -1.55cr</Text></div>
        <Text fontSize={{base:"sm",md:"lg"}} className='flex items-center'  >Runwal Gardens</Text>
        <Text fontSize={{base:"sm",md:"lg"}}  className='flex items-center'>Dombivli (E),Manpada express highway. </Text>
        <Button _focus={{
          bgColor:"teal.600"
       
        }} size='md' leftIcon={<SearchIcon/>}  mt={3} px={9} _hover={{bgColor:"teal.600",transform:"scale(1.1)", }} bgColor={"teal.400"}>Explore</Button>
         </Container></Stack></div>
         <div className=' flex-shrink-0 h-screen w-[70vw] snap-center'> <Stack  bgPos={"center"}  overflow="hidden" bgImage={"linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.68)),url(/assets/images/Project5/main.jpg)"} bgRepeat="no-repeat"  bgSize={{base:"auto",md:"100% 100%"}}  height={"100%"} position="relative" > <Container color="white"   width={"100%"}  fontSize={"lg"} padding={0} margin={0}  className='relative top-[60%]'  left={{base:4,sm:10}}  > <div className='flex items-center'><BiRupee/> <Text >1.18 cr -1.55cr</Text></div>
        <Text fontSize={{base:"sm",md:"lg"}} className='flex items-center'  >Runwal Gardens</Text>
        <Text fontSize={{base:"sm",md:"lg"}}  className='flex items-center'>Dombivli (E),Manpada express highway. </Text>
        <Button _focus={{
          bgColor:"teal.600"
       
        }} size='md' leftIcon={<SearchIcon/>}  mt={3} px={9} _hover={{bgColor:"teal.600",transform:"scale(1.1)", }} bgColor={"teal.400"}>Explore</Button>
         </Container></Stack></div>
        </Stack>
        </>
    );
//   return  <Grid templateColumns={{sm:'repeat(1, 2fr)',md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)","2xl":"repeat(6, 1fr)"}}   px={6} py={4}  gap={6}>{projectdata.map((item)=>{
//      return<Container shadow={useColorModeValue("1px 6px 15px #9E9E9E;","")} maxHeight="300px" maxWidth={"410px"}  _hover={{height:"104%",width:"104%",zIndex:"3"}}  rounded={"lg"}  overflow="hidden" bgColor={"gray.100"} key={item.property_id} width={"100%"}  m={0} p={0} height="50vh">
//          <Flex flex={1} h={"60%"}   ><Image  height={"100%"} width="100%" src={item.main_image} alt={item.property_id} key={item.property_id} ></Image></Flex>
//          <Flex flex={2} h={"30%"} p={2} ><VStack alignItems={"start"}>
           
//          <Stack direction={"row"} className="flex items-center justify-center" ><FaHome/> <Text fontSize={"md"} fontWeight="semibold" >{item.title}</Text></Stack>
//           <Stack direction={"row"}  className="flex items-center justify-center"><BiRupee/><Text fontSize={"sm"} >{item.price}</Text></Stack>
//           <Stack direction={"row"}  className="flex items-center justify-center"><BiLocationPlus/><Text  fontSize={"sm"}  color="gray.500">{item.address}</Text> </Stack>

//            </VStack></Flex>
//      </Container> 
//   })}</Grid>;
};

export default Projects;

  

