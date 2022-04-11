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
  MenuList,
  Container,
  Stack,
  Input,
  FormControl,
  FormLabel,
  SimpleGrid,
  Textarea,
  Button,
  useColorMode,
  Select,
  useToast,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText, useState, useRef, useEffect } from "react";
import jsCookie from "js-cookie";
import { useRouter } from "next/dist/client/router";
import { BiLogOutCircle } from "react-icons/bi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { createClient } from "@supabase/supabase-js";
import { v4 } from "uuid";

export default function AddProperties({ params }) {
  const [seller_id, setSeller_id] = useState("");
  if (jsCookie.get("seller_email") == null || "") {
    return <h1>User is not signed in</h1>;
  }

  useEffect(() => {
    console.log("here");
    var seller_id = jsCookie.get("seller_uid");
    console.log("seller_uid", seller_id);
    var username = jsCookie.get("seller_username");
    var profile = jsCookie.get("seller_profile");
    var email = jsCookie.get("seller_email");
    var contact_no = jsCookie.get("seller_contact_no");
    console.log("profile", profile);
    setSeller_id(seller_id);
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
      onClick: () => {
        router.push(`/All_properties/${seller_id}`);
      },
    },
    {
      name: "Add Properties",
      icon: FiTrendingUp,
      page: "Add_properties",
      onClick: () => {
        router.push(`/Add_properties/${seller_id}`);
      },
    },
    {
      name: "Enquiry",
      icon: FiCompass,
      page: "Enquiry",
      onClick: () => {
        router.push(`/Enquiry/${seller_id}`);
      },
    },
    { name: "Logout", icon: BiLogOutCircle, page: "idk", onClick: () => {} },
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const [title, settitle] = useState("");
  const [sqfoot, setsqfoot] = useState("");
  const [price, setprice] = useState("");
  const [address, setaddress] = useState("");
  const [desc, setdesc] = useState("");
  const [location, setlocation] = useState("");
  const [maplocation, setmaplocation] = useState("");
  const [beds, setbeds] = useState("");
  const [bath, setbath] = useState("");
  const [hospital, sethospital] = useState("");
  const [railway, setrailway] = useState("");
  const [yearbuilt, setyearbuilt] = useState("");
  const [loan, setloan] = useState("Available");
  const [bedroom_img, setbedroom_img] = useState(null);
  const [bathroom, setbathroom] = useState(null);
  const [kitchen, setkitchen] = useState(null);
  const [ima1, setima1] = useState(null);
  const [img2, setimg2] = useState(null);
  const [img3, setimg3] = useState(null);
  const [img4, setimg4] = useState(null);
  const [bedroomtext1, setbedroomtext1] = useState("Bedroom");
  const [kitchen_text, setkitchen_text] = useState("Kitchen");
  const [bathroom_tex, setbathroom_tex] = useState("Bathroom");
  const [img1_text, setImg1_text] = useState("Image 1");
  const [img2_text, setImg2_text] = useState("Image 2");
  const [img3_text, setImg3_text] = useState("Image 3");
  const [type, settype] = useState("House");
  const [show_extra, setshow_extra] = useState(false);
  const form = useRef(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userid, setuid] = useState("");
  const [username, setusername] = useState("");
  const [profile, setprofile] = useState("");
  const [email, setemail] = useState("");
  const [contact_no, setcontact_no] = useState("");
  const [typeofstdio, setTypeofstdio] = useState("Dance & Photo Shooting");
  const [image1, setimage1] = useState(null);
  const [image2, setimage2] = useState(null);
  const [image3, setimage3] = useState(null);
  const [image4, setimage4] = useState(null);
  const [image5, setimage5] = useState(null);
  const [image6, setimage6] = useState(null);
  if (jsCookie.get("seller_email") == null || "") {
    return <h1>User is not signed in</h1>;
  }
  useEffect(() => {
    var username = jsCookie.get("seller_username");
    var profile = jsCookie.get("seller_profile");
    var email = jsCookie.get("seller_email");
    var contact_no = jsCookie.get("seller_contact_no");
    var id = jsCookie.get("seller_uid");
    setuid(id)
    
    setusername(username);
    setemail(email);
    setprofile(profile);
    setcontact_no(contact_no);
  }, []);
  const current_page = router.route.split("/")[2].toString();
  console.log("current_page", current_page);
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.700")}>
      <Box
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        bg={useColorModeValue("white", "teal.800")}
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
            href={`/sellers/${link.page}/${seller_id}`}
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
              <Text fontSize="2xl" fontWeight="bold">
                Real Estate
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
        bg={useColorModeValue("white", "teal.500")}
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
          fontWeight="semibold"
        >
          Real Estate
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
                  <Avatar size={"sm"} src={profile} />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">{username}</Text>
                    <Text fontSize="xs" color="gray.600">
                      Seller
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
                  jsCookie.remove("seller_username");
                  jsCookie.remove("seller_profile");
                  jsCookie.remove("seller_email");
                  jsCookie.remove("seller_phone");
                  jsCookie.remove("state");
                  jsCookie.remove("seller_uid");
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
      <div className="md:ml-60 mt-6 px-10 flex  flex-col">
        <Text
          color={useColorModeValue("gray.900", "white")}
          width={"100%"}
          className="flex items-center justify-center"
          fontWeight="700"
          fontSize={"3xl"}
        >
          Add {type == "House" ? "Properties" : "Studio"}
        </Text>

        <RadioGroup
          onChange={(e) => {
            settype(e);
          }}
          value={type}
        >
          <Stack direction="row">
            <Radio value="House">House</Radio>
            <Radio value="Studio">Studio</Radio>
          </Stack>
        </RadioGroup>
        {type == "House" ? (
          <form
            id="form"
            ref={form}
            className="pt-8"
            onSubmit={async (e) => {
              e.preventDefault();
              var uid = v4();
              console.log("id", uid);
              const supabase = createClient(
                "https://qvthtxoqqpjllkcfwmar.supabase.co",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
              );

              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/img1`, bedroom_img);
              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/img2`, bathroom);
              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/img3`, kitchen);
              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/img4`, ima1);
              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/img5`, img2);
              if (beds == "3" && bath == "2") {
                await supabase.storage
                  .from("realestate-images")
                  .upload(`/Property_Images/${uid}/img6`, img3);
              }
              await supabase.storage
                .from("realestate-images")
                .upload(
                  `/Property_Images/${uid}/main`,
                  beds == "3" && bath == "2" ? img4 : img3
                );
              var seller_id = jsCookie.get("seller_uid");
              var seller_profile = jsCookie.get("seller_profile");
              await supabase
                .from("add_properties")
                .insert({
                  property_id: uid.toString(),
                  title: title,
                  city: location,
                  price: parseInt(price),
                  address: address,
                  bathroom: parseInt(bath),
                  type: type,
                  price_range: "15L-30L",
                  phone_number: contact_no,
                  seller_name: username,
                  seller_email: email,
                  main_image: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/main`,
                  sq_ft: parseFloat(sqfoot),
                  bedroom: parseInt(beds),
                  description: desc,
                  yearBuild: yearbuilt,
                  hospital: hospital,
                  railway: railway,
                  map_location: maplocation,
                  seller_id: userid,
                  seller_image: profile,
                  loan: loan,
                  img1: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img1`,
                  img2: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img2`,
                  img3: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img3`,
                  img4: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img4`,
                  img5: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img5`,
                  img6: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img6`,
                })
                .then((e) => {
                  console.log("Error :", e.error);
                  if (e.error == undefined) {
                    toast({
                      title: "Add Properties",
                      description: "New Properties is been added",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    });
                  } else {
                    toast({
                      title: "Add Properties",
                      description: "Got error",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                });
              document.getElementById("form").reset();
            }}
          >
            <FormControl>
              <SimpleGrid columns={{ base: "1", sm: "2", lg: "3" }}>
                <Stack>
                  <FormLabel>Title</FormLabel>
                  <Input
                    required={true}
                    maxW={{ md: "200px", lg: "95%" }}
                    pt={1}
                    type="text"
                    variant={"filled"}
                    bgColor="gray.200"
                    placeholder={"1BHK"}
                    color="gray.900"
                    _focus={{}}
                    onChange={(e) => {
                      settitle(e.target.value.trim());
                      console.log("changed", title);
                    }}
                  />
                </Stack>
                <Stack>
                  <FormLabel>Sqfoot</FormLabel>
                  <Input
                    required={true}
                    maxW={{ md: "200px", lg: "95%" }}
                    pt={1}
                    type="number"
                    variant={"filled"}
                    bgColor="gray.200"
                    placeholder={"sqfoot"}
                    color="gray.900"
                    _focus={{}}
                    onChange={(e) => {
                      setsqfoot(e.target.value.trim());
                    }}
                  />
                </Stack>
                <Stack>
                  <FormLabel>Price</FormLabel>
                  <Input
                    required={true}
                    maxW={{ md: "200px", lg: "95%" }}
                    pt={1}
                    type="number"
                    variant={"filled"}
                    bgColor="gray.200"
                    placeholder={"3 Cr"}
                    color="gray.900"
                    _focus={{}}
                    onChange={(e) => {
                      setprice(e.target.value.trim());
                    }}
                  />
                </Stack>
              </SimpleGrid>
              <Stack mt={8} direction="row" width="100%">
                <Flex flex="1" direction={"column"}>
                  <FormLabel>Location</FormLabel>
                  <Input
                    required={true}
                    maxW={"90%"}
                    pt={1}
                    type="text"
                    variant={"filled"}
                    bgColor="gray.200"
                    placeholder={"Dombivali"}
                    color="gray.900"
                    _focus={{}}
                    onChange={(e) => {
                      setlocation(e.target.value.trim());
                    }}
                  />
                </Flex>
                <Flex flex="1" direction={"column"}>
                  <FormLabel>Map Location </FormLabel>
                  <Input
                    required={true}
                    maxW={"95%"}
                    pt={1}
                    type="text"
                    variant={"filled"}
                    bgColor="gray.200"
                    placeholder={"Map Data"}
                    color="gray.900"
                    _focus={{}}
                    onChange={(e) => {
                      setmaplocation(e.target.value.trim());
                    }}
                  />
                </Flex>
              </Stack>
              <Stack mt={8}>
                <FormLabel>Address</FormLabel>
                <Textarea
                  _focus={{}}
                  variant={"filled"}
                  bgColor="gray.200"
                  maxH={"150px"}
                  maxLength="500"
                  onChange={(e) => {
                    setaddress(e.target.value.trim());
                  }}
                ></Textarea>
              </Stack>
              <Stack mt={8}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  _focus={{}}
                  variant={"filled"}
                  bgColor="gray.200"
                  maxH={"150px"}
                  maxLength="500"
                  onChange={(e) => {
                    setdesc(e.target.value.trim());
                  }}
                ></Textarea>
              </Stack>

              <Text mt={"16"} fontSize={"2xl"} fontWeight="700">
                Facts & Features
              </Text>
              <Stack mt={3}>
                <SimpleGrid
                  mb={8}
                  gap={8}
                  row={2}
                  columns={{ base: "1", sm: "2", lg: "3" }}
                >
                  <Stack>
                    <FormLabel>Bedroom</FormLabel>
                    <Input
                      required={true}
                      maxW={{ md: "200px", lg: "95%" }}
                      pt={1}
                      type="number"
                      variant={"filled"}
                      bgColor="gray.200"
                      placeholder={"2"}
                      color="gray.900"
                      _focus={{}}
                      maxLength="1"
                      onChange={(e) => {
                        console.log("entered", e.target.value);
                        var value = parseInt(e.target.value);
                        console.log(typeof value);
                        if (e.target.value.trim() == "") {
                          setbedroomtext1("Bedroom");
                          setImg1_text("Image 1");
                          setImg2_text("Image 2");
                        }
                        if (value >= 1 && value <= 3) {
                          setbeds(e.target.value.trim());
                          if (value == 1) {
                            setbedroomtext1("Bedroom");
                            setImg1_text("Image 1");
                            setImg2_text("Image 2");
                          }
                          if (value == 2) {
                            setbedroomtext1("Bedroom1");
                            setImg1_text("Bedroom 2");
                          }
                          if (value == 3) {
                            setbedroomtext1("Bedroom1");
                            setImg1_text("Bedroom2");
                            setImg2_text("Bedroom 3");
                          }
                          console.log("in here ", e.target.value, ",", bath);

                          if (e.target.value == "3" && bath == "2") {
                            setshow_extra(true);
                          } else {
                            setshow_extra(false);
                          }
                        } else if (e.target.value != "") {
                          toast({
                            title: "Add Properties",
                            description: "Please select valid in input",
                            status: "warning",
                            duration: 2000,
                            isClosable: true,
                          });
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Bathroom</FormLabel>
                    <Input
                      required={true}
                      maxW={{ md: "200px", lg: "95%" }}
                      pt={1}
                      type="number"
                      variant={"filled"}
                      bgColor="gray.200"
                      placeholder={"1"}
                      color="gray.900"
                      _focus={{}}
                      onChange={(e) => {
                        console.log("entered", e.target.value);
                        var value = parseInt(e.target.value);
                        console.log(typeof value);
                        setbath(e.target.value.trim());
                        if (e.target.value.trim() == "") {
                          setbathroom_tex("Bathroom");
                          setImg3_text("Image 3");
                        }
                        if (value >= 1 && value <= 2) {
                          setbath(e.target.value.trim());
                          if (value == 1) {
                            setbathroom_tex("Bathroom");
                            setImg3_text("Image 3");
                          }
                          if (value == 2) {
                            setbathroom_tex("Bathroom 1");
                            setImg3_text("Bathroom 2");
                          }
                          console.log(
                            "beds",
                            beds,
                            "bath",
                            e.target.value.trim()
                          );
                          if (beds == "3" && e.target.value.trim() == "2") {
                            setshow_extra(true);
                          } else {
                            setshow_extra(false);
                          }
                        } else if (e.target.value != "") {
                          toast({
                            title: "Add Properties",
                            description: "Please select valid in input",
                            status: "warning",
                            duration: 2000,
                            isClosable: true,
                          });
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Hospital</FormLabel>
                    <Input
                      required={true}
                      maxW={{ md: "200px", lg: "95%" }}
                      pt={1}
                      type="number"
                      variant={"filled"}
                      bgColor="gray.200"
                      placeholder={"2 KM"}
                      color="gray.900"
                      _focus={{}}
                      onChange={(e) => {
                        sethospital(e.target.value.trim());
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Railway</FormLabel>
                    <Input
                      required={true}
                      maxW={{ md: "200px", lg: "95%" }}
                      pt={1}
                      type="number"
                      variant={"filled"}
                      bgColor="gray.200"
                      placeholder={"1.2 KM"}
                      color="gray.900"
                      _focus={{}}
                      onChange={(e) => {
                        setrailway(e.target.value.trim());
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Year Build</FormLabel>
                    <Input
                      required={true}
                      maxW={{ md: "200px", lg: "95%" }}
                      pt={1}
                      type="number"
                      variant={"filled"}
                      bgColor="gray.200"
                      placeholder={"2018"}
                      color="gray.900"
                      _focus={{}}
                      onChange={(e) => {
                        setyearbuilt(e.target.value.trim());
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Loan</FormLabel>
                    <Select
                      variant={"filled"}
                      bgColor="gray.200"
                      _focus={{}}
                      onChange={(e) => {
                        setloan(e.target.value);
                      }}
                    >
                      <option>Available</option>
                      <option>Not-Available</option>
                    </Select>
                  </Stack>
                </SimpleGrid>
              </Stack>
              <Text mt={"16"} fontSize={"2xl"} fontWeight="700">
                Images
              </Text>
              <Stack mt={3}>
                <SimpleGrid
                  mb={8}
                  gap={8}
                  row={2}
                  columns={{ base: "1", sm: "2", lg: "3" }}
                >
                  <Stack>
                    <FormLabel>{bedroomtext1}</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setbedroom_img(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>{bathroom_tex}</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setbathroom(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>{kitchen_text}</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setkitchen(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>{img1_text}</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setima1(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>{img2_text}</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setimg2(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>
                      {bath != "2" ? "Main Image" : img3_text}
                    </FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setimg3(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  {bath == "2" ? (
                    show_extra ? (
                      <Stack>
                        <FormLabel>Main Image</FormLabel>
                        <Input
                          required={true}
                          maxW={"250px"}
                          pt={1}
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files[0] != null) {
                              setimg4(e.target.files[0]);
                            }
                          }}
                        />
                      </Stack>
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )}
                </SimpleGrid>
              </Stack>
            </FormControl>
            <Button
              bgColor={"blue.300"}
              width="30%"
              minW={"200px"}
              _hover={{ bgColor: "blue.400" }}
              color="white"
              type="submit" 
              mb={10}
            >
              <Text>Submit</Text>
            </Button>
          </form>
        ) : (
          <form
            id="form"
            ref={form}
            className="pt-8"
            onSubmit={async (e) => {
              e.preventDefault();
              var uid = v4();
              console.log("id", uid);
              const supabase = createClient(
                "https://qvthtxoqqpjllkcfwmar.supabase.co",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
              );

              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/main`, image1);
              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/img1`, image2);
              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/img2`, image3);
              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/img3`, image4);
              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/img4`, image5);

              await supabase.storage
                .from("realestate-images")
                .upload(`/Property_Images/${uid}/img5`, image6);
              
              var seller_id = jsCookie.get("seller_uid");
              var seller_profile = jsCookie.get("seller_profile");
              await supabase
                .from("add_properties")
                .insert({
                  property_id: uid.toString(),
                  title: title,
                  city: location,
                  price: parseInt(price),
                  address: address,

                  type: type,

                  phone_number: contact_no,
                  seller_name: username,
                  seller_email: email,
                  main_image: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/main`,
                  sq_ft: parseFloat(sqfoot),

                  description: desc,

                  map_location: maplocation,
                  seller_id: uid,
                  seller_image: profile,
                  type_of_studio: typeofstdio,
                  img1: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img1`,
                  img2: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img2`,
                  img3: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img3`,
                  img4: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img4`,
                  img5: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img5`,
                  img6: `https://qvthtxoqqpjllkcfwmar.supabase.in/storage/v1/object/public/realestate-images/Property_Images/${uid}/img6`,
                })
                .then((e) => {
                  console.log("Error :", e.error);
                  if (e.error == undefined) {
                    toast({
                      title: "Add Studio",
                      description: "New Studio has been added",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    });
                  } else {
                    toast({
                      title: "Add studio",
                      description: "Got error",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                });
              document.getElementById("form").reset();
            }}
          >
            <FormControl>
              <SimpleGrid columns={{ base: "1", sm: "2", lg: "3" }}>
                <Stack>
                  <FormLabel>Studio name</FormLabel>
                  <Input
                    required={true}
                    maxW={{ md: "200px", lg: "95%" }}
                    pt={1}
                    type="text"
                    variant={"filled"}
                    bgColor="gray.200"
                    placeholder={"Studio name"}
                    color="gray.900"
                    _focus={{}}
                    onChange={(e) => {
                      settitle(e.target.value.trim());
                      console.log("changed", title);
                    }}
                  />
                </Stack>
                <Stack>
                  <FormLabel>Sqfoot</FormLabel>
                  <Input
                    required={true}
                    maxW={{ md: "200px", lg: "95%" }}
                    pt={1}
                    type="number"
                    variant={"filled"}
                    bgColor="gray.200"
                    placeholder={"sqfoot"}
                    color="gray.900"
                    _focus={{}}
                    onChange={(e) => {
                      setsqfoot(e.target.value.trim());
                    }}
                  />
                </Stack>
                <Stack>
                  <FormLabel>Price per day</FormLabel>
                  <Input
                    required={true}
                    maxW={{ md: "200px", lg: "95%" }}
                    pt={1}
                    type="number"
                    variant={"filled"}
                    bgColor="gray.200"
                    placeholder={"3 Cr"}
                    color="gray.900"
                    _focus={{}}
                    onChange={(e) => {
                      setprice(e.target.value.trim());
                    }}
                  />
                </Stack>
              </SimpleGrid>
              <Stack mt={8} direction="row" width="100%">
                <Flex flex="1" direction={"column"}>
                  <FormLabel>Location</FormLabel>
                  <Input
                    required={true}
                    maxW={"90%"}
                    pt={1}
                    type="text"
                    variant={"filled"}
                    bgColor="gray.200"
                    placeholder={"Dombivali"}
                    color="gray.900"
                    _focus={{}}
                    onChange={(e) => {
                      setlocation(e.target.value.trim());
                    }}
                  />
                </Flex>
                <Flex flex="1" direction={"column"}>
                  <FormLabel>Map Location </FormLabel>
                  <Input
                    required={true}
                    maxW={"95%"}
                    pt={1}
                    type="text"
                    variant={"filled"}
                    bgColor="gray.200"
                    placeholder={"Map Data"}
                    color="gray.900"
                    _focus={{}}
                    onChange={(e) => {
                      setmaplocation(e.target.value.trim());
                    }}
                  />
                </Flex>
              </Stack>
              <Stack mt={8}>
                <FormLabel>Address</FormLabel>
                <Textarea
                  _focus={{}}
                  variant={"filled"}
                  bgColor="gray.200"
                  maxH={"150px"}
                  maxLength="500"
                  onChange={(e) => {
                    setaddress(e.target.value.trim());
                  }}
                ></Textarea>
              </Stack>
              <Stack mt={8}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  _focus={{}}
                  variant={"filled"}
                  bgColor="gray.200"
                  maxH={"150px"}
                  maxLength="500"
                  onChange={(e) => {
                    setdesc(e.target.value.trim());
                  }}
                ></Textarea>
              </Stack>

              <Text mt={"16"} fontSize={"2xl"} fontWeight="700">
                Images
              </Text>
              <Stack mt={3}>
                <SimpleGrid
                  mb={8}
                  gap={8}
                  row={2}
                  columns={{ base: "1", sm: "2", lg: "3" }}
                >
                  <Stack>
                    <FormLabel>Image 1</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setimage1(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Image 2</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setimage2(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Image 3</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setimage3(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Image 4</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setimage4(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Image 5</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setimage5(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Image 6</FormLabel>
                    <Input
                      required={true}
                      maxW={"250px"}
                      pt={1}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0] != null) {
                          setimage6(e.target.files[0]);
                        }
                      }}
                    />
                  </Stack>
                  <Stack>
                    <FormLabel>Type of Studio</FormLabel>
                    <Select
                      variant={"filled"}
                      bgColor="gray.200"
                      _focus={{}}
                      onChange={(e) => {
                        setTypeofstdio(e.target.value);
                      }}
                    >
                      <option>Dance & Photo Shooting</option>
                      <option>Recording</option>
                      <option>Gym</option>
                    </Select>
                  </Stack>
                </SimpleGrid>
              </Stack>
            </FormControl>
            <Button
              bgColor={"blue.300"}
              width="30%"
              minW={"200px"}
              _hover={{ bgColor: "blue.400" }}
              color="white"
              type="submit"
              mb={10}
            >
              <Text>Submit</Text>
            </Button>
          </form>
        )}
      </div>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  return {
    props: {
      id,
    },
  };
}
