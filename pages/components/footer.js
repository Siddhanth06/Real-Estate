import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  IconButton,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
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
  );
};

export default Footer;
