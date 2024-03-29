"use client";

import {
  Box,
  BoxProps,
  Container,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Text,
  chakra,
  VisuallyHidden,
  Link,
  InputGroup,
  IconButton,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import NextLink from "next/link";
import { Logo } from "@/assets/icons";
import { FOOTER_COMPANY_NAV_ITEMS } from "@/utils";
import { FOOTER_SUPPORT_NAV_ITEMS } from "@/utils";
import { ReactNode } from "react";
import { BiMailSend } from "react-icons/bi";
import { GoMail } from "react-icons/go";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"700"}
      fontSize={"lg"}
      mb={30}
      color="white"
      fontFamily={"heading"}
    >
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("#212730", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer2(props: BoxProps) {
  return (
    <Box
      as="footer"
      role="contentinfo"
      pt={5}
      mb={{ sm: "-1px", lg: "0" }}
      bg={useColorModeValue("customBlack.900", "gray.900")}
      color={useColorModeValue("#a2a2a2", "gray.200")}
      {...props}
    >
      <Container as={Stack} maxW={"7xl"} pt={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={8}>
            <Logo color={useColorModeValue("gray.700", "white")} />
            <Text fontSize={"sm"}>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </Text>
            <Stack direction={"row"} spacing={6} pb={2}>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/Panaverse_edu"}
              >
                <FaTwitter color="white" />
              </SocialButton>
              <SocialButton
                label={"Youtube"}
                href={"https://www.youtube.com/@panaverse"}
              >
                <FaYoutube color="white" />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram color="white" />
              </SocialButton>
              <SocialButton
                label={"Discord"}
                href={"https://discord.gg/jEDHUZcD"}
              >
                <FaDiscord color="white" />
              </SocialButton>
              <SocialButton
                label={"Github"}
                href={"https://github.com/panaverse"}
              >
                <FaGithub color="white" />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack spacing={2} align="flex-start">
            <ListHeader>Company</ListHeader>
            {FOOTER_COMPANY_NAV_ITEMS.map((child) => (
              <Link
                key={child.label}
                as={NextLink}
                href={child.href ?? "#"}
                _hover={{
                  outline: "none",
                  color: "white",
                }}
              >
                {child.label}
              </Link>
            ))}
          </Stack>
          <Stack spacing={2} align="flex-start">
            <ListHeader>Support</ListHeader>
            {FOOTER_SUPPORT_NAV_ITEMS.map((child) => (
              <Link
                key={child.label}
                as={NextLink}
                href={child.href ?? "#"}
                _hover={{
                  outline: "none",
                  color: "white",
                }}
              >
                {child.label}
              </Link>
            ))}
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <InputGroup>
                {/* <InputLeftElement
                pointerEvents="none"
                children={<GoMail color="gray.300"/>}
                /> */}
                <InputLeftElement pointerEvents="none">
                  <GoMail color="gray.300"/>
                </InputLeftElement>
                <Input
                  placeholder={"Enter email"}
                  _placeholder={{ color: "white" }}
                  bg={useColorModeValue("customBlack.700", "whiteAlpha.100")}
                  color="white"
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                />
              </InputGroup>
              <IconButton 
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                icon={<BiMailSend/>}
                aria-label="Subscribe"
                />
            </Stack>
            <Text fontSize={"sm"}>
              Get the latest news and updates right at your inbox.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
