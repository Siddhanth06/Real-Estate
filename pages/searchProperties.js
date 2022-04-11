import {
  Flex,
  Stack,
  Text,
  HStack,
  Button,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import {useRouter} from "next/router";
import React, { useEffect, useState } from "react";

import { BiCurrentLocation, BiHomeHeart, BiSearchAlt } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { createClient } from "@supabase/supabase-js";
import Houses from "./houses";
const searchProperties = ({ data }) => {
  const { query } = useRouter();

  const [props, setProps] = useState(null);
  const [price, setPrice] = useState(4000000);
  const [type, setType] = useState(query.type??"House");
  const [city, setCity] = useState(query.city??"Mumbai");
  useEffect(async () => {
    const supabase = createClient(
      "https://qvthtxoqqpjllkcfwmar.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ0MjE2MjgxLCJleHAiOjE5NTk3OTIyODF9.ebphrnhHfHkxHicRGFJCywcrdKW598DDcfMdIG83P_k"
    );

    supabase
      .from("add_properties")
      .select("*")
      .match({ type: type, city: city })
      .then((data) => {
        console.log("data", data);
        setProps(data.data);
      });
    console.log("in useEffect", type, city);
  }, [city, type]);

  return (
    <>
      <Stack direction={"column"} height={"100vh"} spacing={0}>
        <Flex flex={3} height="100%">
          <Stack
            bgImage={
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.68)),url(https://cdn.pixabay.com/photo/2015/07/05/13/44/beach-832346_1280.jpg)"
            }
            bgRepeat="no-repeat"
            bgSize={{ base: "auto", md: "100%" }}
            bg
            px={"20"}
            direction={"row"}
            alignItems="center"
            w="full"
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems={"center"}
              w="full"
            >
              <BiCurrentLocation size={"1.4rem"} color="white" />
              <Select
                _focus={{}}
                onChange={(e) => {
                  setCity(e.target.value.toString());
                  console.log("City", city);
                }}
                variant="filled"
                placeholder="City"
              >
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
              <BiHomeHeart size={"1.4rem"} color="white" />
              <Select
                _focus={{}}
                onChange={(e) => {
                  setType(e.target.value.toString());
                  console.log("Type", type);
                }}
                variant="filled"
                placeholder="Type"
              >
                <option value="House">House</option>
                <option value="Studio">Studio</option>
              </Select>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems={"center"}
              w="full"
            >
              <FaMoneyBillWave size={"1.4rem"} color="white" />
              <Select _focus={{}} variant="filled" placeholder="Price Range">
                <option value="option1">Rs 15L or less</option>
                <option value="option2">Rs 15L-30L</option>
                <option value="option3">Rs 30L-45L</option>
                <option value="option4">Rs 45L +</option>
              </Select>
            </Stack>
            
          </Stack>
        </Flex>
       
        <Flex height="100%" maxH="500px" flex={14}>
          {props == null || props == undefined ? (
            <>NO data</>
          ) : (
            <Houses data={props} />
          )}
        </Flex>
      </Stack>
    </>
  );
};

export default searchProperties;

