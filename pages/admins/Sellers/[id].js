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
} from "@chakra-ui/react";
  import {
    FiUser,
    FiHome,
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
import { useRouter } from 'next/dist/client/router';
import { BiLogOutCircle } from 'react-icons/bi';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {createClient} from "@supabase/supabase-js"
import { useState,useEffect } from "react";
  export default function Sellers({data}){
    const toast = useToast();
    const { colorMode, toggleColorMode } = useColorMode();
    const bk=useBreakpoint();
    const [username, setusername] = useState("");
    const [profile, setprofile] = useState("");
    const [email, setemail] = useState("");
    const [contact_no, setcontact_no] = useState("");
    function getbkvalues() {
      if (bk == "2xl" || bk == "xl") {
        return "center";
      } else {
        return "start";
      }
    }
    const LinkItems = [
      {
        name: "All Properties",
        icon: FiHome,
        page: "All_properties",
        onClick: () => {},
      },
      {
        name: "Accounts",
        icon: FiUser,
        page: "Accounts",
        onClick: () => {
          router.push("/Accounts/theIdofuser");
        },
      },
      {
        name: "Sellers",
        icon: FiTrendingUp,
        page: "Sellers",
        onClick: () => {
          router.push("/Add_properties/theIdofuser");
        },
      },
      { name: "Enquiry", icon: FiCompass, page: "Enquiry", onClick: () => {} },
      { name: "Logout", icon: BiLogOutCircle, page: "idk", onClick: () => {} },
    ];
   
    const { isOpen, onOpen, onClose } = useDisclosure();
    if (jsCookie.get("admin_email") == null || "") {
      return <h1>User is not signed in</h1>;
    }
    const router = useRouter();
    useEffect(() => {
      console.log("here");
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
    const current_page=router.route.split('/')[2].toString();
    console.log("current_page",current_page);
    return (
      <Box minH="100vh" overflow={"hidden"} bg={useColorModeValue("gray.300", "gray.800")}>
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

        <Box ml={{ base: 0, md: 60 }} width="100%"  p="4">
          <SimpleGrid
            columns={data.length>0?4:1}
            
            spacing="15px"
            bgColor={useColorModeValue("gray.300", "gray.800")}
            mr={3}
            maxHeight={"650px"}
            mt={20}
            ml={3}
          >
            {data.length>0?data.map((seller) => {
              return (
                <Container
                  className="flex flex-col justify-center "
                  py={3}
                  key={seller.uid}
                  alignItems={"center"}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  textAlign={getbkvalues()}
                  bgColor={useColorModeValue("white","gray.900")}
                >
                  <Center>
                    <Avatar
                      name={"SID"}
                      size="xl"
                      bgColor={"transparent"}
                      src={seller.profile}
                      alt={"users"}
                      mb={3}
                      pos={"relative"}
                      style={{
                        width: "125px",
                        height: "125px",
                        overflow: "hidden",
                        borderWidth: 3,
                        borderColor: "#22FF28",
                        padding: "3px",
                      }}
                    />
                  </Center>

                  <Heading
                    size={"sm"}
                    fontSize={14}
                    color={useColorModeValue("gray.900", "gray.50")}
                    maxWidth={"100%"}
                    isTruncated
                  >
                    {seller.username}
                  </Heading>
                  <Text size={"sm"} fontWeight={600} color={"gray.500"}>
                    {seller.contact_no}
                  </Text>
                  <Text
                    fontWeight={600}
                    color={"gray.500"}
                    mb={3}
                    maxWidth={"100%"}
                    isTruncated
                  >
                    {seller.email}
                  </Text>

                  <Stack direction={"row"} spacing={5} width="100%">
                    <Button
                      flex={1}
                      size={"sm"}
                      bgColor={"red.700"}
                      color={"white"}
                      fontSize={"sm"}
                      rounded={"full"}
                      _focus={{
                        bg: "red.600",
                      }}
                      _hover={{
                        bg: "red.600",
                      }}
                    >
                      Reject
                    </Button>
                    <Button
                      size={"sm"}
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"green.500"}
                      color={"white"}
                      boxShadow={
                        "5px 10px 25px 5px rgb(154,192,182 / 48%), 10px 10px 10px 5px rgb(154,192,182 / 43%)"
                      }
                      _hover={{
                        bg: "green.600",
                      }}
                      _focus={{
                        bg: "green.600",
                      }}
                      onClick={(e) => 
                        {
                           const supabase = createClient('https://qvthtxoqqpjllkcfwmar.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k');
                          supabase
                            .from("sellers").update({state:"verified"}).match({"email":seller.email})
                            .then((e) => {
                              window.location.reload(false)
                              toast({
                                title: "Verification",
                                description:
                                  `${seller.username} Account has been verified`,
                                status: "success",
                                duration: 2000,
                                isClosable: true,
                              });
                            });
                            
                            

                        }}
                    >
                      Verify
                    </Button>
                  </Stack>
                </Container>
              );
            }): <Text  fontSize={'20'} className="flex item-center justify-center" fontWeight={'700'}>No Seller Account to verified </Text>}
          </SimpleGrid>
        </Box>
      </Box>
    );
  }


export async function getServerSideProps(context){
    const supabase = createClient('https://qvthtxoqqpjllkcfwmar.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k');

 
  const { data, error } = await supabase.from('sellers').select('*').eq('state','unverified')
    const id = context.params.id;
    return {
      props: {
        data:data,
      },
    };
}