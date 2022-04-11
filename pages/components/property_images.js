import { Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const PropertyImages = ({data}) => {
  
  return (
    <Stack spacing={0} direction={"row"} h="100vh" w="100%" pt={8}>
      <Flex flex={1} width="100%" h="100%" p="2">
        <Image rounded={"md"} src={data.main_image}></Image>
      </Flex>
      <Flex direction={"row"} flex={1} width="100%" h="100%">
        <Flex direction={"column"} flex={1} width="100%" h="100%">
          <Flex flex={1} width="100%" h="100%" p="2">
            <Image
              rounded={"md"}
              src={data.img1}
            ></Image>
          </Flex>
          <Flex direction={"row"} flex={1} width="100%" h="100%" p="2">
            <Image
              rounded={"md"}
            src={data.img2}></Image>
          </Flex>
        </Flex>
        <Flex direction={"column"} flex={1} width="100%" h="100%">
          <Flex flex={1} width="100%" h="100%" p="2">
            <Image
              rounded={"md"}
              src={data.img3} 
            ></Image>
          </Flex>
          <Flex direction={"row"} flex={1} width="100%" h="100%" p="2">
            <Container
              rounded={"md"}
              className="flex items-center justify-center"
              bgSize={"cover"}
              bgImage={
                `linear-gradient(to bottom, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.68)),url(${data.img4} )`
              }
            >
              <Stack
                direction={"column"}
                className="flex items-center justify-center"
              >
                <Text
                  fontSize={"1.8rem"}
                  fontWeight="semibold"
                  color="whitesmoke"
                >
                  View More
                </Text>
                <Text
                  fontSize={"1.6rem"}
                  fontWeight="semibold"
                  color="whitesmoke"
                >
                  Images
                </Text>
              </Stack>
            </Container>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default PropertyImages;
