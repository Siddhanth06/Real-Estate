import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Select,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { BiCurrentLocation, BiSearchAlt } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { useRouter } from 'next/router'
import { BsHouseFill } from "react-icons/bs";
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,

  infinite: true,
  autoplay: true,
  speed: 500,
  
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const cards = [
  "/assets/images/house1.jpg",
  "/assets/images/house2.jpg",
  "/assets/images/house3.jpg",
  "/assets/images/studio1.jpg",
];

const HomeCarousel = () => {
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const [slider, setSlider] = useState(null);
  const router = useRouter();
  const [type, setType] = useState("House")
  const [city, setCity] = useState("Andheri")
  // These are the images used in the slide

  return (
    <div>
      <Box
        position={"relative"}
        height={"100vh"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          position="absolute"
          left={"10px"}
          top={"50%"}
          zIndex={2}
          bgColor={"gray.600"}
          opacity={"40%"}
          _focus={{}}
          _hover={{ opacity: "100%" }}
          onClick={() => slider?.slickNext()}
        >
          <BiLeftArrowAlt />
        </IconButton>

        {/* <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton> */}
        {/* Right Icon */}
        <IconButton
          position="absolute"
          right={"10px"}
          _focus={{}}
          top={"50%"}
          bgColor={"gray.600"}
          opacity={"40%"}
          _hover={{ opacity: "100%" }}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        <Stack
          position="absolute"
          top={"60%"}
          left={"20%"}
          bgColor={useColorModeValue("white", "gray.700")}
          width={"70%"}
          height="30%"
          rounded={"3xl"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <Stack
            height="full"
            rounded={"2xl"}
            direction="column"
            padding={"1em"}
            justifyContent={"center"}
            bgColor={useColorModeValue("gray.50", "gray.800")}
          >
            <Text fontSize={"3xl"} fontWeight="bold">
              Search your dream home here
            </Text>
            <Text fontSize={"md"} fontWeight="medium" color={"gray.500"}>
              compares prices from 2000+ places to help you find the lowest
              price on the right place for you.
            </Text>
            <Stack direction={"row"}>
              <Stack
                direction={"row"}
                justifyContent="center"
                alignItems={"center"}
                w="full"
              >
                <BiCurrentLocation size={"1.4rem"} color="teal" />
                <Select variant="filled" onChange={(e)=>{
                  setCity(e.target.value);
                }} placeholder="City">

<option value="Ghatkopar">Ghatkopar</option>
                <option value="Dombivli">Dombivli</option>
                <option value="Andheri">Andheri</option>
                <option value="Thane">Thane</option>
                <option value="Borivali">Borivali</option>
                <option value="Kalyan">Kalyan</option>
                <option value="Dadar">Dadar</option>
                <option value="Badlapur">Badlapur</option>
                <option value="Sion">Sion</option>
                </Select>
              </Stack>

              <Stack
                direction={"row"}
                justifyContent="center"
                alignItems={"center"}
                w="full"
              >
                <BsHouseFill size={"1.4rem"} color="teal" />
                <Select variant="filled" onChange={(e)=>{
                setType(e.target.value);
                }} placeholder="Type">
                  <option value="House">House</option>
                  <option value="Studio">Studio</option>
                </Select>
              </Stack>
              <Button
                width={"full"}
                leftIcon={<BiSearchAlt size={"1.4rem"} color="white" />}
                bgColor={useColorModeValue("teal", "teal.600")}
                color={"white"}
                _focus={{}}
                _hover={{}}
                variant="solid"
                onClick={(e)=>{
                  router.push(`/searchProperties/?type=${type}&city=${city}`)
                }}
              >
                Find a place
              </Button>
            </Stack>
          </Stack>
        </Stack>
        {/* Slider */}
        <Slider {...settings} pauseOnHover={false} ref={(slider) => setSlider(slider)}>
          {cards.map((url, index) => (
            <Image
              objectFit={"cover"}
              w={"100vw"}
              h="100vh"
              key={index}
              position="relative"
              src={url}
              alt={index}
            />
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default HomeCarousel;
