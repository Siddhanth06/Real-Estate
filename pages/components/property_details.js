import {
  Button,
  Flex,
  HStack,
  Image,
  Input,

  SimpleGrid,
  Stack,
  Text,
  useBreakpoint,
  VStack,
  Avatar,
  useToast,
  Textarea,
  useColorModeValue
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";
import { MdLocationPin } from "react-icons/md";
import { BsHouseFill, BsHouse } from "react-icons/bs";
import { FaBed, FaBath, FaHospital, FaBuilding } from "react-icons/fa";
import { GiHomeGarage, GiReceiveMoney } from "react-icons/gi";
import { IoMdTrain } from "react-icons/io";
import Datetime from "react-datetime";
import { v4 as uuidv4 } from "uuid";
import "react-datetime/css/react-datetime.css";
import { createClient } from "@supabase/supabase-js";
import jsCookie from "js-cookie";
import footer from "./footer";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const PropertyDetails = ({ data }) => {
  const toast = useToast();
  const date = new Date().getDate().toString();
  const mon = new Date().getMonth() + 1;
  const month = new Date().getMonth() + 1 < 10 ? "0" + mon : mon.toString();
  const year = new Date().getFullYear().toString();
  const bk = useBreakpoint;
  const [email, setEmail] = useState("");
  const [user_uid, setuser_uid] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setphone] = useState("");
  const [meetdate, setmeetdate] = useState(`${year}-${month}-${date}`);
  const [totalamount, setTotalamount] = useState(0);
  const [downpay, setDownpay] = useState(0);
  const [interset, setInterset] = useState(0);
  const [mortageyear, setMortageYear] = useState(0);
  const [monthlypaymet, setMonthlypaymet] = useState(0);
  const [intersetpaid, setIntersetpaid] = useState(0);
  const [totalpayment, setTotalpayment] = useState(0)
  useEffect(() => {
    var username = jsCookie.get("user_username");
    console.log("user_name", username);
    var email = jsCookie.get("user_email");
    var user_uid = jsCookie.get("user_uid");
    setuser_uid(user_uid);
    setUsername(username);
    setEmail(email);
  }, []);

  return (
    <Stack className="text-black bg-slate-100 " width={"100%"} height="100%">
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems="start"
        width={"100%"}
        px={{ base: "10px", md: "20px", lg: "50px" }}
        height="100%"
      >
        <Flex flex="4" width={"100%"} height="100%">
          <Flex
            direction={"column"}
            flex={{ base: "100%", md: "90%", lg: "75%" }}
            width={"100%"}
            height={"100%"}
            minHeight="800px"
            maxH={"1500px"}
          >
            <Text
              fontSize={{ base: "3xl", md: "3xl", lg: "4xl", xl: "5xl" }}
              fontWeight="bold"
            >
              {data.title.toString().toUpperCase() ?? "NA"}
            </Text>
            <Stack direction={"row"} alignItems="center" spacing={5} mt="3">
              {" "}
              <MdLocationPin size={25} className="text-slate-500 " />
              <Text
                className="text-slate-500"
                fontSize={{ base: 14, sm: 16, md: 18 }}
                fontWeight="semibold"
              >
                {" "}
                {data.city ?? "NA"}
              </Text>{" "}
            </Stack>
            {data.type=="House"?<Stack
              direction={"row"}
              spacing={{ base: "5", sm: "10", md: "20", lg: "28" }}
            >
              <Stack>
                <Text
                  className="mt-10"
                  fontSize={{ base: "sm", sm: "md", md: "xl" }}
                  fontWeight="bold"
                >
                  Price
                </Text>
                <Text
                  className="mt-2"
                  fontSize={{ base: "sm", sm: "md", md: "xl" }}
                  fontWeight="bold"
                  color={"gray.600"}
                >
                  {" \u20B9 " + data.price ?? "NA"}
                </Text>
              </Stack>
              <Stack>
                <Text
                  className="mt-10"
                  fontSize={{ base: "sm", sm: "md", md: "xl" }}
                  fontWeight="bold"
                >
                  Sq/ft
                </Text>
                <Text
                  className="mt-2"
                  fontSize={{ base: "sm", sm: "md", md: "xl" }}
                  fontWeight="bold"
                  color={"gray.600"}
                >
                  {data.sq_ft ?? "NA"}
                </Text>
              </Stack>
              <Stack>
                <Text
                  className="mt-10"
                  fontSize={{ base: "sm", sm: "md", md: "xl" }}
                  fontWeight="bold"
                >
                  Price Per Sq/ft
                </Text>
                <Text
                  className="mt-2"
                  fontSize={{ base: "sm", sm: "md", md: "xl" }}
                  fontWeight="bold"
                  color={"gray.600"}
                >
                  {" \u20B9 " + String((data.price / data.sq_ft).toFixed())}
                </Text>
              </Stack>
            </Stack>:
            <><Text fontWeight={"700"} fontSize="3xl">Studio information</Text>
            
            <Text
              className="mt-10"
              fontSize={{ base: "sm", sm: "md", md: "xl" }}
              fontWeight="700"
            >
              Phone
            </Text>
            <Text
              width={{ base: "100%", md: "70%" }}
              maxWidth="1000px"
              minW="250px"
            >
              {data.phone_number}
            </Text>
            <Text
              className="mt-10"
              fontSize={{ base: "sm", sm: "md", md: "xl" }}
              fontWeight="700"
            >
              Price per day
            </Text>
            <Text
              width={{ base: "100%", md: "70%" }}
              maxWidth="1000px"
              minW="250px"
            >
              {" \u20B9 "+data.price}
            </Text>

            <Text
              className="mt-10"
              fontSize={{ base: "sm", sm: "md", md: "xl" }}
              fontWeight="700"
            >
              Email
            </Text>
            
            <Text
              width={{ base: "100%", md: "70%" }}
              maxWidth="1000px"
              minW="250px"
            >
              {data.seller_email}
            </Text>
            <Text
              className="mt-10"
              fontSize={{ base: "sm", sm: "md", md: "xl" }}
              fontWeight="700"
            >
              Open Time
            </Text>
            <Text
              width={{ base: "100%", md: "70%" }}
              maxWidth="1000px"
              minW="250px"
            >
              {"9 AM to 9 PM"}
            </Text>
            
            </>}
            
            <Text
              className="mt-10"
              fontSize={{ base: "sm", sm: "md", md: "xl" }}
              fontWeight="700"
            >
              Address
            </Text>
            <Text
              width={{ base: "100%", md: "70%" }}
              maxWidth="1000px"
              minW="250px"
            >
              {data.address}
            </Text>
            <Text
              className="mt-10"
              fontSize={{ base: "sm", sm: "md", md: "xl" }}
              fontWeight="700"
            >
              Description
            </Text>
            <Text
              width={{ base: "100%", md: "70%" }}
              maxWidth="1000px"
              minW="250px"
            >
              {data.description}
            </Text>
            
            {data.type=="House"?<>
            <Text
              className="mt-10"
              fontSize={{ base: "sm", sm: "md", md: "xl" }}
              fontWeight="700"
            >
              Facts and Features
            </Text>
            <Stack width={"100%"} maxWidth="850px" minW="250px" p="4">
              <SimpleGrid
                columns={{ base: 2, sm: 3, md: 3, lg: 4, xl: 4 }}
                spacing={4}
              >
                <Stack direction={"row"} alignItems="center">
                  <BsHouseFill
                    size={bk == "base" ? 20 : 35}
                    className="text-slate-500"
                  />
                  <VStack spacing={0} alignItems="start">
                    <Text color={"gray.800"} fontSize={"sm"} fontWeight="700">
                      Type
                    </Text>
                    <Text fontSize={"sm"} fontWeight="600" color={"gray.500"}>
                      {data.type}
                    </Text>
                  </VStack>
                </Stack>

                <Stack direction={"row"} alignItems="center">
                  <FaBed
                    size={bk == "base" ? 20 : 35}
                    className="text-slate-500"
                  />
                  <VStack spacing={0} alignItems="start">
                    <Text color={"gray.800"} fontSize={"sm"} fontWeight="700">
                      Bedroom
                    </Text>
                    <Text fontSize={"sm"} fontWeight="600" color={"gray.500"}>
                      {"" + data.bedroom}
                    </Text>
                  </VStack>
                </Stack>

                <Stack direction={"row"} alignItems="center">
                  <FaBath
                    size={bk == "base" ? 20 : 35}
                    className="text-slate-500"
                  />
                  <VStack spacing={0} alignItems="start">
                    <Text color={"gray.800"} fontSize={"sm"} fontWeight="700">
                      Bathroom
                    </Text>
                    <Text fontSize={"sm"} fontWeight="600" color={"gray.500"}>
                      {"" + data.bathroom}
                    </Text>
                  </VStack>
                </Stack>

                <Stack direction={"row"} alignItems="center">
                  <FaHospital
                    size={bk == "base" ? 20 : 35}
                    className="text-slate-500"
                  />
                  <VStack spacing={0} alignItems="start">
                    <Text color={"gray.800"} fontSize={"sm"} fontWeight="700">
                      Hospital
                    </Text>
                    <Text fontSize={"sm"} fontWeight="600" color={"gray.500"}>
                      {data.hospital + " KM"}
                    </Text>
                  </VStack>
                </Stack>

                <Stack direction={"row"} alignItems="center">
                  <IoMdTrain
                    size={bk == "base" ? 20 : 35}
                    className="text-slate-500"
                  />
                  <VStack spacing={0} alignItems="start">
                    <Text color={"gray.800"} fontSize={"sm"} fontWeight="700">
                      Railway
                    </Text>
                    <Text fontSize={"sm"} fontWeight="600" color={"gray.500"}>
                      {data.railway + " KM"}
                    </Text>
                  </VStack>
                </Stack>

                <Stack direction={"row"} alignItems="center">
                  <GiReceiveMoney
                    size={bk == "base" ? 20 : 35}
                    className="text-slate-500"
                  />
                  <VStack spacing={0} alignItems="start">
                    <Text color={"gray.800"} fontSize={"sm"} fontWeight="700">
                      Loan
                    </Text>
                    <Text fontSize={"sm"} fontWeight="600" color={"gray.500"}>
                      {data.loan}
                    </Text>
                  </VStack>
                </Stack>
              </SimpleGrid>
            </Stack>
            </>:<>studio</>}
            
            <iframe
              className="pt-5"
              src={data.map_location}
              width={{ base: "70%", md: "90%" }}
              height="500px"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </Flex>
        </Flex>

        <StickyBox
          style={{ top: "45px", flex: "25%", width: "100%" }}
          className="px-auto"
        >
          <Stack
            marginLeft={{ lg: "20px" }}
            width={{ base: "95%", sm: "90%", md: "100%" }}
            mx="auto"
            mt={{ sm: "10" }}
            borderRadius={"md"}
            minWidth={"250px"}
            spacing="8"
            bgColor="white"
            px={4}
            py={5}
            boxShadow="1px 2px 13px -1px rgba(79,76,76,0.75)"
          >
            <HStack alignItems={"center"} justifyContent="space-between">
              <Text fontWeight={"700"} fontSize="2xl">
                Contact Seller
              </Text>
              <HStack>
                <div>
                  <Text fontSize={"lg"} fontWeight="600">
                    {data.seller_name}
                  </Text>
                  <Text fontSize={"md"} color="gray.400" fontWeight="500">
                    {data.seller_email}
                  </Text>
                </div>
                <Avatar size={"lg"} src={data.seller_image} />
              </HStack>
            </HStack>

            <form
              id="seller_form"
              onSubmit={(e) => {
                e.preventDefault();
                if (username == undefined) {
                  toast({
                    title: "Contact Seller",
                    description: "Please Sign In",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
                } else {
                  if (phone.length <= 14 && phone.length > 9) {
                    console.log("msg", message);

                    const uid = uuidv4();
                    const supabase = createClient(
                      "https://qvthtxoqqpjllkcfwmar.supabase.co",
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
                    );
                    supabase
                      .from("contact_seller")
                      .insert({
                        uid: uid,
                        user_uid: user_uid,
                        seller_id: data.seller_id,
                        email: email,
                        contact_no: phone,
                        message: message,
                        meet: meetdate,
                        username: username,
                      })
                      .then((e) => {
                        if (e.error == null) {
                          toast({
                            title: "Contact Seller",
                            description: "Your message has been send",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                          });
                          document.getElementById("seller_form").reset();
                        } else {
                          toast({
                            title: "Contact Seller",
                            description: "Something went wrong?",
                            status: "error",
                            duration: 2000,
                            isClosable: true,
                          });
                        }
                      });
                  } else {
                    toast({
                      title: "Contact",
                      description: "Invalid phone number",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                }
              }}
            >
              <Input
                type="date"
                value={meetdate}
                min={`${year}-${month}-${date}`}
                required
                className="mb-5"
                onChange={(e) => {
                  setmeetdate(e.target.value);
                }}
              ></Input>

              <Input
                type="text"
                minLength={4}
                variant={"filled"}
                color="black"
                required
                value={username}
                disabled
                bgColor={"gray.200"}
                _hover={{ cursor: "pointer" }}
                placeholder={"Username"}
                className="mb-5"
              ></Input>

              <Input
                type="email"
                variant={"filled"}
                color="black"
                value={email}
                disabled
                required
                bgColor={"gray.200"}
                _hover={{ cursor: "pointer" }}
                placeholder={"Email"}
                className="mb-5"
              ></Input>
              <Input
                type="number"
                minLength={3}
                maxLength={10}
                variant={"filled"}
                color="black"
                required
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                bgColor={"gray.200"}
                _hover={{ cursor: "pointer" }}
                placeholder={"+91"}
                className="mb-5"
              ></Input>
              <Textarea
                minH="50px"
                maxH={"150px"}
                variant={"filled"}
                color="black"
                onChange={(e) => {
                  setMessage(e.target.value.trim());
                }}
                required
                bgColor={"gray.200"}
                _hover={{ cursor: "pointer" }}
                placeholder={"Message"}
                className="mb-5"
              ></Textarea>
              <Input
                type="submit"
                _focus={{ bgColor: "teal.500" }}
                variant={"filled"}
                required
                bgColor={"teal.400"}
                color="white"
                _hover={{ cursor: "pointer" }}
                placeholder={"Message"}
              ></Input>
            </form>
          </Stack>
        </StickyBox>
      </Stack>
      <Stack p={10}>
      {data.type=="House"?
      <>
      <form className="py-10" onSubmit={(e)=>{
        e.preventDefault();
        console.log("calculating");
        console.log(totalamount,downpay,mortageyear,interset);
        var totalboro=totalamount-downpay;
        var intersetpermonth=(interset/100)/12;
        var noofmonths=mortageyear*12;
        console.log(totalamount,intersetpermonth,noofmonths);
        var monthlypay=(totalboro*(intersetpermonth*(1+intersetpermonth)**noofmonths))/((1+intersetpermonth)**noofmonths-1);
        console.log("monthlyoay",monthlypay.toString().substring(0,7));
        var totalpayment=monthlypay*noofmonths;

        console.log("totalpayment",totalpayment);
        var costofloan=totalpayment-totalamount;
        console.log("costofloan",costofloan);
        setMonthlypaymet(monthlypay.toString().substring(0,9));
        setIntersetpaid(costofloan.toString().substring(0,9));
        setTotalpayment(totalpayment.toString().substring(0,9));
      }}>
        <Text fontWeight={"700"} fontSize="2xl">
          Mortage calculator
        </Text>
        <HStack>
         
          <VStack alignItems={"start"}>
            <Text fontSize={{ base: "sm", md: "md" }}>Total Amount</Text>
            <Input
            isRequired
            onChange={(e)=>{
              setTotalamount(e.target.value)
            }}
            type={"number"}
              variant={"filled"}
              color="black"
              bgColor={"gray.200"}
              _hover={{ cursor: "pointer" }}
              placeholder={`\u20B9`}
            ></Input>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize={{ base: "sm", md: "md" }}>Down Payment</Text>
            <Input
             isRequired
             onChange={(e)=>{
              setDownpay(e.target.value)
            }}
             type={"number"}
              variant={"filled"}
              color="black"
              bgColor={"gray.200"}
              _hover={{ cursor: "pointer" }}
              placeholder={`\u20B9`}
            ></Input>
          </VStack>
        </HStack>

        <HStack>
          <VStack alignItems={"start"}>
            <Text fontSize={{ base: "sm", md: "md" }}>Interest Rate</Text>
            <Input
             isRequired
             onChange={(e)=>{
               setInterset(e.target.value)
             }}
             type={"number"}
              variant={"filled"}
              color="black"
              bgColor={"gray.200"}
              _hover={{ cursor: "pointer" }}
              placeholder={"%"}
            ></Input>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize={{ base: "sm", md: "md" }}>Number of years</Text>
            <Input
             isRequired
             type={"number"}
             onChange={(e)=>{
              setMortageYear(e.target.value)
            }}
              variant={"filled"}
              color="black"
              bgColor={"gray.200"}
              _hover={{ cursor: "pointer" }}
              placeholder={8}
            ></Input>
          </VStack>
        </HStack>
       
        <Button
          _hover={{}}
          type="submit"
          variant={"solid"}
          mt={5}
          width="40%"
          minWidth={"250px"}
          maxWidth="450px"
          height={"40px"}
          bgColor="gray.400"
          color="gray.800"
          fontSize={{ base: "sm", md: "md" }}
        >
          Calculate
        </Button>
        </form>
        <Stack
          px={2}
          py={3}
          borderBottom="2px"
          borderBottomColor={"blue.400"}
          borderRadius="sm"
          width="40%"
          minWidth={"250px"}
          maxWidth="450px"
        >
          <HStack justifyContent={"space-between"}>
            <Text
              fontWeight={"600"}
              color="gray.800"
              fontSize={{ base: "sm", md: "md" }}
            >
              Monthly Payment
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>{" \u20B9 "+monthlypaymet}</Text>
          </HStack>
         
          <HStack justifyContent={"space-between"}>
            <Text
              fontWeight={"600"}
              color="gray.800"
              fontSize={{ base: "sm", md: "md" }}
            >
              Interest Paid
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>{" \u20B9 "+intersetpaid}</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text
              fontWeight={"600"}
              color="gray.800"
              fontSize={{ base: "sm", md: "md" }}
            >
              Mortage Payment
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>{" \u20B9 "+totalpayment}</Text>
          </HStack>
        </Stack></>
    :<></>}
     
            </Stack>
      <Stack
      width="100%"
      bgColor={useColorModeValue("gray.900", "teal.600")}
      h="max-content"
      direction={"row"}
    >
      <Flex
        flex={1}
        direction="column"
        className="flex items-start justify-center px-5"
        color={useColorModeValue("teal.300", "gray.100")}
      >
        <Text fontSize={"19"} fontWeight={"700"}>
          Real Estate
        </Text>
        <Text
          className="mt-2"
          color={useColorModeValue("gray.100", "gray.400")}
        >
          Your Dream home search stops here
        </Text>
      </Flex>
      <Flex flex={1} className="flex items-start justify-center">
        <Stack spacing="4" minW="36" flex="1" className="flex items-start py-5">
          <Stack direction={"row"} spacing="36">
            <Stack spacing="3" shouldWrapChildren>
              <Text
                fontSize={{ sm: "sm", xl: "md" }}
                color={useColorModeValue("teal.300", "gray.100")}
                fontWeight="semibold"
              >
                Product
              </Text>
              <Button variant="link">How it works</Button>
              <Button variant="link">Pricing</Button>
              <Button variant="link">Use Cases</Button>
            </Stack>

            <Stack spacing="3" shouldWrapChildren>
              <Text
                fontSize={{ sm: "sm", xl: "md" }}
                fontWeight="semibold"
                color={useColorModeValue("teal.300", "gray.100")}
              >
                Legal
              </Text>
              <Button variant="link">Privacy</Button>
              <Button variant="link">Terms</Button>
              <Button variant="link">License</Button>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        direction="column"
        className="flex items-start justify-center space-y-3"
      >
        <Text
          fontSize={{ sm: "sm", xl: "md" }}
          fontWeight="semibold"
          color={useColorModeValue("teal.300", "gray.100")}
        >
          Stay up to date
        </Text>
        <Stack
          spacing="4"
          direction={{ base: "column", sm: "row" }}
          maxW={{ lg: "360px" }}
        >
          <Input
            variant={"filled"}
            bgColor="#f3f3f3"
            _hover={{}}
            _focus={{}}
            color="gray"
            placeholder="Enter your email"
            type="email"
            required
          />
          <Button
            variant="solid"
            bgColor="teal"
            color="white"
            _hover={{}}
            _focus={{}}
            type="submit"
            flexShrink={0}
          >
            Subscribe
          </Button>
        </Stack>
      </Flex>
    </Stack>
    </Stack>
  );
};

export default PropertyDetails;
