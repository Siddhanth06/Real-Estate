import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from 'uuid';
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function contact() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState("");
    const toast = useToast();
  return (
    <Container bg="gray.100" maxW="100%" height={"100vh"} mt={0} centerContent overflow="hidden">
      <Flex >
        <Box
            height={"90vh"}
          bg="teal.700"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.300">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                     
                      
                      <HStack >
                      <MdPhone color="teal" size="20px" />
                        <Text
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          className="flex items-center "
                          color="#DCE2FF"
                        > +91-8635272719
                        </Text>
                      </HStack>
                      <HStack >
                      <MdEmail color="teal" size="20px" />
                        <Text
                        
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          className="flex items-center "
                          color="#DCE2FF"
                        >  siddhant@gmail.com
                        </Text>
                      </HStack>
                     
                      <HStack >
                        <MdLocationOn color="teal" size="20px" />
                        <Text
                        
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          className="flex items-center "
                          color="#DCE2FF"
                        >
                          Dombivli, India
                        </Text>
                      </HStack>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "teal" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "teal" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "teal" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                        <form
                        id="contact"
                        onSubmit={(e)=>{
                            e.preventDefault();
                            const uid = uuidv4();
                            const supabase = createClient(
                                "https://qvthtxoqqpjllkcfwmar.supabase.co",
                                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
                              ); 
                            supabase.from("contact_us").insert({
                                uid:uid,
                                email:email,
                                name:username,
                                message:message,

                            }).then((e)=>{
                                document.getElementById("contact").reset();
                                toast({
                                    title: "Contact us",
                                    description:
                                      "Your message has been collected successfully",
                                    status: "success",
                                    duration: 2000,
                                    isClosable: true,
                                  });
                            })
                        }}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input onChange={(e)=>{
                              setUsername(e.target.value)
                          }}  _focus={{}} required type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input  onChange={(e)=>{
                              setEmail(e.target.value)
                          }} type="email"   _focus={{}} required  size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name" >
                        <FormLabel>Message</FormLabel>
                        <Textarea
                        maxHeight={"150px"}
                        required
                        onChange={(e)=>{
                            setMessage(e.target.value)
                        }}
                        _focus={{}}
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>

                      <FormControl mt="5" id="name" float="right">
                        <Button
                         width="100%"
                          variant="solid"
                          bg="teal"
                          color="white"
                          _hover={{}}
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
