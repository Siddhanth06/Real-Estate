import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  Button,
  Stack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  SimpleGrid,
  Container,
  Center,
  Heading,
  MenuList,
  useToast,
  useBreakpoint,
  useColorMode,

  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import {
    FiHome,
    FiUser,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import jsCookie from 'js-cookie';
import { useState,useEffect } from "react";

import { useRouter  } from 'next/dist/client/router';
import { BiLogOutCircle } from 'react-icons/bi';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { createClient } from "@supabase/supabase-js"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {v4} from 'uuid';
import md5 from "md5";
export default function Sellers({ data }) {
    const toast = useToast();
    const { colorMode, toggleColorMode } = useColorMode();
    const bk = useBreakpoint();
    function getbkvalues() {
        if (bk == "2xl" || bk == "xl") {
            return "center";
        } else {
            return "start";
        }
    }
    const LinkItems = [
        { name: 'All Properties', icon: FiHome, page: "All_properties", onClick: () => { } },
        {
        name: "Accounts",
        icon: FiUser,
        page: "Accounts",
        onClick: () => {
           router.push("/Accounts/theIdofuser");
        },
      },
        {
            name: 'Sellers', icon: FiTrendingUp, page: "Sellers", onClick: () => {
                router.push("/Add_properties/theIdofuser");
            }
        },
        { name: 'Enquiry', icon: FiCompass, page: "Enquiry", onClick: () => { } },
        { name: "Logout", icon: BiLogOutCircle, page: "idk", onClick: () => { } }
    ];

    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const [profileurl, setprofileurl] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [phone, setphone] = useState();
    const [profile, setprofile] = useState();
    
    const [state, setstate] = useState(null);
    const [contact_no, setcontact_no] = useState("");
    // if(jsCookie.get('uid')==null||""){
    //   return <h1>User is not signed in</h1>
    // }
    useEffect(() => {
      var state = jsCookie.get("state");
      if (state != null) {
        setstate(state);
      }
      var username = jsCookie.get("admin_username");
    var profile = jsCookie.get("admin_profile");
    var email = jsCookie.get("admin_email");
    var contact_no = jsCookie.get("admin_contact_no");
    console.log("profile", profile);
    setusername(username);
    setemail(email);
    setprofile(profile);
    setcontact_no(contact_no);
    }, []);
    const current_page = router.route.split('/')[2].toString();
    console.log("current_page", current_page);
    return (
        <Box minH="100vh" bg={useColorModeValue("gray.300", "gray.800")}>
            <Box
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}

                bg={useColorModeValue("white", "gray.900")}
                borderRight="1px"
                borderRightColor={useColorModeValue("gray.200", "gray.700")}
                w={{ base: "full", md: 60 }}
                pos="fixed"
                h="full"
            >
                <Flex
                    h="20"
                    alignItems="center"
                    mx="8"
                    justifyContent="space-between"
                >
                    <Text fontSize="xl" fontWeight="600">
                        Real Estate
                    </Text>
                    <CloseButton
                        display={{ base: "flex", md: "none" }}
                        onClick={onClose}
                    />
                </Flex>
                {LinkItems.map((link) => (
                    <Link
                        href={`/admins/${link.page}/id`}
                        key={link.name}
                        style={{ textDecoration: "none" }}
                        _focus={{ boxShadow: "none" }}
                    >
                        <Flex
                            align="center"
                            p="4"
                            mx="4"
                            borderRadius="lg"
                            role="group"
                            cursor="pointer"
                            _hover={{
                                bg: "cyan.400",
                                color: "white",
                            }}
                            bgColor={link.page == current_page ? "blue.300" : "gray.100"}
                            color={link.page == current_page ? "white" : "gray.900"}
                            m="2"
                        >
                            <Icon
                                mr="4"
                                fontSize="16"
                                _groupHover={{
                                    color: "white",
                                }}
                                as={link.icon}
                            />
                            <Text>{link.name}</Text>
                        </Flex>
                    </Link>
                ))}
            </Box>
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <Box
                        transition="3s ease"
                        bg={useColorModeValue("white", "gray.900")}
                        borderRight="1px"
                        borderRightColor={useColorModeValue("gray.200", "gray.700")}
                        w={{ base: "full", md: 60 }}
                        pos="fixed"
                        h="full"
                        onClose={onClose}
                    >
                        <Flex
                            h="20"
                            alignItems="center"
                            mx="8"
                            justifyContent="space-between"
                        >
                            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                                Logo
                            </Text>
                            <CloseButton
                                display={{ base: "flex", md: "none" }}
                                onClick={onClose}
                            />
                        </Flex>
                        {LinkItems.map((link) => (
                            <Link
                                key={link.name}
                                href="#"
                                style={{ textDecoration: "none" }}
                                _focus={{ boxShadow: "none" }}
                            >
                                <Flex
                                    align="center"
                                    p="4"
                                    mx="4"
                                    borderRadius="lg"
                                    role="group"
                                    cursor="pointer"
                                    _hover={{
                                        bg: "cyan.400",
                                        color: "white",
                                    }}
                                >
                                    {link.icon && (
                                        <Icon
                                            mr="4"
                                            fontSize="16"
                                            _groupHover={{
                                                color: "white",
                                            }}
                                        />
                                    )}
                                </Flex>
                            </Link>
                        ))}
                    </Box>
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <Flex
                ml={{ base: 0, md: 60 }}
                px={{ base: 4, md: 4 }}
                height="20"
                alignItems="center"
                bg={useColorModeValue("white", "gray.900")}
                borderBottomWidth="1px"
                borderBottomColor={useColorModeValue("gray.200", "gray.700")}
                justifyContent={{ base: "space-between", md: "flex-end" }}
            >
                <IconButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onOpen}
                    variant="outline"
                    aria-label="open menu"
                    icon={<FiMenu />}
                />

                <Text
                    display={{ base: "flex", md: "none" }}
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    Logo
                </Text>

                <HStack spacing={{ base: "0", md: "6" }}>
                    <Button onClick={toggleColorMode} _focus={{}}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Flex alignItems={"center"}>
                        <Menu>
                            <MenuButton
                                py={2}

                                _focus={{ boxShadow: "none" }}
                            >
                                <HStack>
                                    <Avatar
                                        size={"sm"}
                                        src={
                                            profile
                                          }
                                    />
                                    <VStack
                                        display={{ base: "none", md: "flex" }}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2"
                                    >
                                        <Text fontSize="sm">{username}</Text>
                                        <Text fontSize="xs" color="gray.600">
                                            Admin
                                        </Text>
                                    </VStack>
                                    <Box display={{ base: "none", md: "flex" }}>
                                        <FiChevronDown />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList
                                bg={useColorModeValue("white", "gray.900")}
                                borderColor={useColorModeValue("gray.200", "gray.700")}
                            >
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Settings</MenuItem>
                                <MenuItem>Billing</MenuItem>
                                <MenuDivider />
                                <MenuItem
                                    onClick={(e) => {
                                        jsCookie.remove("Username");
                                        jsCookie.remove("uid");
                                        jsCookie.remove("profile");
                                        jsCookie.remove("email");
                                        jsCookie.remove("phone");
                                        router.push("/");
                                    }}
                                >
                                    Sign out
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack>
            </Flex>

            <Box ml={{ base: 0, md: 60 }} p="4">
                <form 
                id='admins'
        style={{width:"100%"}}

        onSubmit={async(e)=>{
          e.preventDefault()
          
          const uid=v4();
          var enc=md5(password.trim());
          const supabase = createClient('https://qvthtxoqqpjllkcfwmar.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k');
          supabase.storage.from("realestate-images").upload(`/admin/${uid}/profile`,profile).then(async(value)=>{
            value.data 
        setusername("");
        setpassword("");
        setemail("");
        setprofileurl("");
          await supabase.from('admins').insert({
            "uid":uid,
            "username":username,
            "profile":`https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/admin/${uid}/profile`,
            "email":email,
            "password":enc,
            "contact_no":phone,
            
          },)
          
          
          
          toast({
            title: 'Admin Account',
            description: "Admin's Account has been created successfully",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
           document.getElementById("admins").reset();
          })
          
         
        }}
       
        
        >
          <Flex
            height={"90%"}
            width="100%"
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.300", "gray.800")}
          >
            <Stack spacing={4} mx={"auto"} maxW={"lg"} minWidth="450px">
              <Stack align={"center"}>
                <Heading fontSize={"3xl"} textAlign={"center"}>
                  Admin Account
                </Heading>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={4}
              >
                <Stack spacing={2}>
                  <HStack spacing={10}>
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
                  </HStack>
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
            </Box>
        </Box>
    );
}


// export async function getServerSideProps(context) {
//     const supabase = createClient('https://qvthtxoqqpjllkcfwmar.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k');


//     const { data, error } = await supabase.from('sellers').select('*').eq('state', 'unverified')
//     const id = context.params.id;
//     return {
//         props: {
//             data: data,
//         },
//     };
// }