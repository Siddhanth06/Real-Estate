import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  useBreakpoint,
  Container,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import jsCookie from "js-cookie";
import { useRouter } from "next/dist/client/router";
export default function WithSubnavigation() {
  const theme = useColorMode();
  const bk = useBreakpoint();
  const [state, setstate] = useState(null);
  const [user_uid, setuser_uid] = useState(null);
  function fun1(yaxis) {
    console.log("axis", yaxis);
  }
  // useEffect(() => {
  //   window.addEventListener("scroll",fun1)
  //   return () => {
  //     window.removeEventListener("scroll",fun1);
  //   }
  // }, []);
  const route = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    var state = jsCookie.get("state");
    if (state != null) {
      setstate(state);
    }
    var user = jsCookie.get("user_uid");
    console.log("user_uid",user);
    if (user != null) {
      setuser_uid(user);
    }
  }, []);

  return (
    <Box position={"fixed"} zIndex="90" w="full">
      <Flex
        bg={useColorModeValue("gray.100", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        h="8vh"
        py={{ base: 2, lg: 4 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={{ base: "none", lg: "none" }}
            fontFamily={"heading"}
            fontWeight="bold"
            color={useColorModeValue("gray.900", "gray.100")}
          >
            Real Estate
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 2 }}
          justify={"right"}
          alignItems={"center"}
          direction={"row"}
          spacing={6}
        >
          <Flex display={{ base: "none", lg: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
          <Button onClick={toggleColorMode} _focus={{}}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          
         {user_uid==undefined?<>
          <Link href="/signin" passHref={true}>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              color={useColorModeValue("teal.700", "white")}
              border={"1px"}
              borderColor={useColorModeValue("teal.700", "white")}
              bg={"transparent"}
              href={"/signin"}
              _hover={{
                bg: "teal.300",
              }}
            >
              Sign In
            </Button>
          </Link>
    {state != null && state != "verified" ? (
      <Text fontWeight={"600"} color="black">
        Account not verified
      </Text>
    ) : (
      <></>
    )}
    <Link href="/signup" passHref={true}>
      {state == null ? (
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"teal.400"}
          _hover={{
            bg: "teal.300",
          }}
        >
          Sign Up
        </Button>
      ) : (
        <></>
      )}
    </Link>
    {state != null && state == "verified" ? (
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"teal.400"}
        onClick={(e) => {
          var id = jsCookie.get("seller_uid");
          route.push(`/sellers/All_properties/${id}`);
        }}
        _hover={{
          bg: "teal.300",
        }}
      >
        Dashboard
      </Button>
    ) : (
      <></>
    )}
         </>:<Button
         _hover={{bgColor:"teal.500"}}
         _focus={{}} bgColor="teal.400" color={"white"} onClick={(e)=>{
           jsCookie.remove("user_uid");
           jsCookie.remove("user_username");
           jsCookie.remove("user_profile");
           jsCookie.remove("user_email");
           jsCookie.remove(
             "user_phone",
             
           );
           document.location.reload();
         }}>Logout</Button>}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
function getbutton() {
  return (
    <>
    
    </>
  );
  
}
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
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
const NAV_ITEMS = [
  {
    label: "Home",
    href:"#home"
  },
  {
    label: "Properties",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "About us",
    href: "#",
  },
  {
    label: "Contact us",
    href: "/contactus",
  },
];

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("teal.300", "gray.900") }}
      passHref={true}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "teal.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"teal.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    // <Stack spacing={4} onClick={children && onToggle}>
    //   <Flex
    //     py={2}
    //     as={Link}
    //     href={href ?? "#"}
    //     justify={"space-between"}
    //     align={"center"}
    //     _hover={{
    //       textDecoration: "none",
    //     }}
    //   >
    //     <Text
    //       fontWeight={600}
    //       color={useColorModeValue("gray.600", "gray.200")}
    //     >
    //       {label}
    //     </Text>
    //     {children && (
    //       <Icon
    //         as={ChevronDownIcon}
    //         transition={"all .25s ease-in-out"}
    //         transform={isOpen ? "rotate(180deg)" : ""}
    //         w={6}
    //         h={6}
    //       />
    //     )}
    //   </Flex>

    //   <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
    //     <Stack
    //       mt={2}
    //       pl={4}
    //       borderLeft={1}
    //       borderStyle={"solid"}
    //       borderColor={useColorModeValue("gray.200", "gray.700")}
    //       align={"start"}
    //     >
    //       {children &&
    //         children.map((child) => (
    //           <Link key={child.label} py={2} href={child.href}>
    //             {child.label}
    //           </Link>
    //         ))}
    //     </Stack>
    //   </Collapse>
    // </Stack>
    <></>
  );
};
