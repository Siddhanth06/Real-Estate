import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
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
  useColorMode,
  MenuList,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Container,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiUser,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import jsCookie from "js-cookie";
import { useRouter } from "next/dist/client/router";
import { BiLogOutCircle } from "react-icons/bi";
import { createClient } from "@supabase/supabase-js";
import Houses from "../../houses";
import { useState,useEffect } from "react";
export default function All_properties({ data }) {
  console.log("data", data);
  const val = Array.of(data);
  console.log("val", val);
  const val2 = Array.of(val[0]);
  console.log("val2", val2);
  const router = useRouter();
  const [username, setusername] = useState("");
  const [profile, setprofile] = useState("");
  const [email, setemail] = useState("");
  const [contact_no, setcontact_no] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
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
  const current_page = router.route.split("/")[2].toString();
  console.log("current_page", current_page);
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
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
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
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
                transition="all 0.3s"
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

      <Flex
        flex={11}
        height={"100%"}
        mt={10}
        ml={250}
        position="absolute"
        w="80%"
        overflowY={"scroll"}
      >
        <Accordion
          width="90%"
          height={"100%"}
          mx="auto"
          allowToggle={true}
          allowMultiple={true}
        >
          {val2[0].data.map((data) => (
            <AccordionItem borderRadius={"4px"} overflow={"hidden"} key={data.uid} width="100%" bgColor="gray.800">
              <h2>
                <AccordionButton
                  _expanded={{ bgColor: "gray.900" }}
                  _focus={{}}
                  cursor="pointer"
                  _hover={{ bgColor: "gray.900" }}
                  color="white"
                >
                  <HStack
                    className="flex items-center justify-between"
                    w="100%"
                    pr="10%"
                  >
                    <Text fontSize={"1.1em"} fontWeight={"600"}>
                      {data.name}
                    </Text>
                    <Text>
                      {data.email.toString().length < 23
                        ? data.email
                        : data.email.toString().substring(0, 23) + "..."}
                    </Text>
                   
                  </HStack>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                position="relative"
                height={"100%"}
                className="flex items-start"
              >
                <VStack
                  className="flex items-start"
                  height={"100%"}
                  width="100%"
                  alignItems={"start"}
                >
                  <Text
                    fontWeight={"600"}
                    position="relative"
                    height={"100%"}
                    color="white"
                  >
                    {" "}
                    Message
                  </Text>
                  <Text color="white">{data.message}</Text>
                  <Container
                    bgColor="teal.700"
                    color="white"
                    rounded={"5px"}
                    width={"max-content"}
                  >
                    {" "}
                    <a
                      href={`mailto:${data.email}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Reply
                    </a>
                  </Container>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Box>
  );
}

export async function getServerSideProps(context) {

  const supabase = createClient(
    "https://qvthtxoqqpjllkcfwmar.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
  );
  var data = await supabase
    .from("contact_us")
    .select("*");
    console.log("data ->",data.data);
  return {
    props: {
      data: data,
    },
  };
}

