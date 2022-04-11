import React, { useEffect, useState } from "react";
import {
  Stack,
  Text,
  Flex,
  Image,
  AvatarGroup,
  Avatar,
  HStack,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  useColorModeValue,
  useToast,
  Radio,RadioGroup,
} from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { createClient } from "@supabase/supabase-js";
import jsCookie from "js-cookie";
import md5 from "md5";
const Signup = () => {
  const [radio, setradio] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [profileurl, setprofileurl] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [username, setusername] = useState("")
  const [phone, setphone] = useState()
  const [profile, setprofile] = useState()
  const router = useRouter();
  const toast = useToast();
  const [state, setstate] = useState(null);
  const [value, setValue] = useState("user");
  useEffect(() => {
   var state=jsCookie.get('state');
   if(state!=null){
     setstate(state)
   }
   
  }, [])

  if(state!=null && state!='verified'){
    return <Text>Account already exist</Text>
  }
  return (
    
    <Stack
      direction={"row"}
      height="100vh"
      className="flex items-center justify-center"
    >
      <Flex
        display={{ base: "none", sm: "none", md: "flex" }}
        direction={"column"}
        bgColor="teal.700"
        px={5}
        flex={"40%"}
        className="flex  justify-center space-y-6"
        height="100%"
        width="100%"
      >
        <Text
          fontSize={"4xl"}
          fontWeight="700"
          lineHeight={"10"}
          color={"white"}
        >
          Your Dream Home Search Stops Here..
        </Text>
        <Text fontSize={"lg"} fontWeight="500" color={"gray.300"}>
          {" "}
          Create an account and discover the worlds' best Real Estate
          properties.
        </Text>
        <Stack direction={{ md: "column", lg: "row" }} alignItems="center">
          <AvatarGroup size="md" max={3}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
          <Text color="white" fontWeight={"600"}>
            1000+ Properties Buyer's & Sellers{" "}
          </Text>
        </Stack>
      </Flex>
      <Flex flex={"60%"} height="80vh" width="100%" className="flex items-center justify-center">
        <form 
        style={{width:"100%"}}

        onSubmit={async(e)=>{
          
          if(radio=="user"){
            e.preventDefault();
            
            const uid = uuidv4();
            console.log("uid",uid);
            var enc = md5(password.trim());
            const supabase = createClient(
              "https://qvthtxoqqpjllkcfwmar.supabase.co",
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
            );
           
                await supabase.from("users").insert({
                  user_uid:uid.toString(),
                  username: username,
                  profile: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/users/${uid}/profile`,
                  email: email,
                  password: enc,
                  phone: phone,
                }).then((e)=>{
                  jsCookie.set("user_uid", uid.toString());
                  jsCookie.set("user_username",username);
                  jsCookie.set("user_profile", `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/users/${uid}/profile`);
                  jsCookie.set("user_email", email);
                  jsCookie.set("user_phone", phone);
                  
                    if(!e.error){
                      setusername("");
                setpassword("");
                setemail("");
                setprofileurl("");
                
                router.push("/");
                toast({
                  title: "Sign up",
                  description:
                    "Your Account has been created successfully",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                });
                    }else if (e.error.code == "23505") {
                      
                      toast({
                        title: "Sign up",
                        description:
                          "Email should be unique",
                        status: "error",
                        duration: 4000,
                        isClosable: true,
                      });
                    }else{
                      toast({
                        title: "Sign up",
                        description: `Got Error ${e.error.message}`,
                        status: "error",
                        duration: 4000,
                        isClosable: true,
                      });
                    }
                });

                
          }else{
            e.preventDefault()
          console.log("here");
          const uid=uuidv4();
          var enc=md5(password.trim());
          const supabase = createClient('https://qvthtxoqqpjllkcfwmar.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k');
          supabase.storage.from("realestate-images").upload(`/users/${uid}/profile`,profile).then(async(value)=>{
            value.data 
            
          await supabase.from('sellers').insert({
            "seller_id":uid,
            "username":username,
            "profile":`https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/users/${uid}/profile`,
            "email":email,
            "password":enc,
            "contact_no":phone,
            'state':'unverified'
          },)
          
          
          setusername("")
          setpassword("")
          setemail("")
          setprofileurl("")
          jsCookie.set('state',"not-verified");
          router.push('/')
          toast({
            title: 'Sign up',
            description: "Your Account has been created wait for verification",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          })
          }
         
        }}
       
        
        >
          <Flex
            height={"90%"}
            width="100%"
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={4} mx={"auto"} maxW={"lg"} minWidth="450px">
              <Stack align={"center"}>
                <Heading fontSize={"3xl"} textAlign={"center"}>
                  Sign up
                </Heading>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={4}
              >
                <Stack spacing={2}>
                  {radio!="user"?<HStack spacing={10}>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Profile</FormLabel>
                      <Input
                        required={true}
                        maxW={"250px"}
                        pt={1}
                        type="file"
                        accept="image/*"

                        onChange={(e) => {
                          if (e.target.files[0] != null) {
                            setprofileurl(
                              URL.createObjectURL(e.target.files[0])
                            );
                            setprofile(e.target.files[0])
                          }
                        }}
                      />
                    </FormControl>
                    <Avatar
                      width={"80px"}
                      height="80px"
                      src={profileurl != "" ? profileurl : ""}
                    ></Avatar>
                  </HStack>:<></>}
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input onChange={(e)=>{
                      setusername(e.target.value)
                    }} minLength={4} maxLength={20} required={true} type="text" />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input required={true} type="email" onChange={(e)=>{
                      setemail(e.target.value)
                    }} />
                  </FormControl>
                  <FormControl id="phone" isRequired >
                    <FormLabel>Contact Number</FormLabel>
                    <Input onChange={(e)=>{
                      setphone(e.target.value)
                    }} minLength={10} maxLength={14} required={true} type="number" />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                      minLength={4}
                        required={true}
                        onChange={(e)=>{
                          setpassword(e.target.value)
                        }}
                        type={showPassword ? "text" : "password"}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <div className="flex  justify-start py-3">
              <RadioGroup onChange={(e)=>{
                setradio(e)
              }} value={radio}>
                <Stack direction="row">
                  <Radio value="user">User</Radio>
                  <Radio value="seller">Seller</Radio>
                  
                </Stack>
              </RadioGroup>
            </div>
                  <Stack spacing={10} >
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bgColor="teal.700"
                      color={"white"}
                      _hover={{
                        bg: "teal.800",
                      }}
                      type="submit"
                    >
                      Create Account
                    </Button>
                  </Stack>

                  <Stack>
                    <Text align={"center"}>
                      Already have an account?{" "}
                      <Link href={"/signin"} color={"blue.400"}>
                        Sign In
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </form>
      </Flex>
    </Stack>
  );
};

export default Signup;
