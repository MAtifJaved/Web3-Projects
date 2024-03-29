"use client";

import {
  Box,
  BoxProps,
  Container,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Link,
  Text,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import { HeadPhone } from "@/assets/icons";

export default function Footer(props: BoxProps) {
  return (
    <Box
      as="footer"
      role={"contentinfo"}
      pt={5}
      bg={useColorModeValue("customBlack.900", "gray.900")}
      color={useColorModeValue("#a2a2a2", "gray.200")}
      {...props}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        px={3}
        borderRadius="12px 12px 0px 0px"
        bg={useColorModeValue("#1A1F27", "gray.900")}
        color={useColorModeValue("#a2a2a2", "gray.200")}
      >
        <SimpleGrid
          templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          spacing={{ base: 4, md: 8 }}
          px={5}
          py={3}
        >
          <Stack
            spacing={8}
            borderRightWidth={{ base: 0, md: 1 }}
            borderColor="#373a3e"
            justify={{ sm: "start", md: "center" }}
            alignItems={{ base: "center", md: "start" }}
          >
            <Text
              pt={6}
              color="white"
              mr={{ base: 0, sm: 10 }}
              maxW={250}
              textAlign={{ base: "center", md: "left" }}
            >
              © Copyrighted and Designed by{" "}
              <Link
                color="blue.500"
                isExternal
                href="https://github.com/MAtifJaved"
              >
                Engr. Atif Javed
              </Link>
            </Text>
          </Stack>
          <Stack
            spacing={8}
            direction="row"
            borderRightWidth={{ base: 0, md: 1 }}
            borderColor="#373a3e"
            justify={{ sm: "start", md: "center" }}
            alignItems={"center"}
          >
            <HeadPhone />
            <Stack>
              <Text pt={6} fontSize={"sm"} textAlign={"center"}>
                Have a question? Call us 24/6
              </Text>
              <Heading size="md" color={"white"}>
                <Link href="tel:+923082220203" _hover={{ outline: "none" }}>
                  + 92 308 2220203
                </Link>
              </Heading>
            </Stack>
          </Stack>
          <Stack spacing={8} alignItems={{ base: "center", md: "end" }}>
            <Link>
              <Text pt={6} fontSize={"sm"} textAlign={"center"} color="white">
                Powered by
              </Text>
              <Image
                src="/panacloud.png"
                alt="pana-cloud-logo"
                width={100}
                height={50}
              />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
