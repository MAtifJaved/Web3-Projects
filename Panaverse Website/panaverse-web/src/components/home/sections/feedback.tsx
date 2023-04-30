import { Box, Flex, Text, useColorModeValue,VStack } from "@chakra-ui/react";
import * as React from "react";
import Image from "next/image";
// import { Quotee } from "./Quotee";
import { QuoteIcon } from "./QuoteIcon";
import picture from "@/assets/images/picture.jpg";

const Feedback = () => {
  return (
    <Box as="section" bg="white">
      <Box maxW="3xl" mx="auto" padding={25}>
        <Flex direction="column" align="center" textAlign="center">
          <QuoteIcon
            color={useColorModeValue("gray.300", "gray.600")}
            fontSize={{ base: "3xl", md: "6xl" }}
          />
          <Text fontWeight="medium" mt="6" fontSize={"sm"}>
            &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.&rdquo;
          </Text>
          <Flex>
            <VStack>
              <Image src={picture} alt="picture" height={100} width={70}/>
              <Text fontWeight={"black"} mt={"20px"}>Muhammad Atif Javed</Text>
              <Text>Electrical Engineer</Text>
            </VStack>
          </Flex>
          {/* <Quotee
            name="Muhammad Atif Javed"
            jobTitle="Electrical Engineer"
            imageSrc="picture"
            mt="8"
          /> */}
        </Flex>
      </Box>
    </Box>
  );
};

export default Feedback;
