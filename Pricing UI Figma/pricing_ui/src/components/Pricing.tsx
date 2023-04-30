"use client";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  HStack,
  Icon,
  StackProps,
  Stack,
} from "@chakra-ui/react";

import {CheckIcon} from "@/icons/icons";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing={5} {...rest}>
      <Icon as={CheckIcon} h="22px" w="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};

export default function Pricing() {
  return (
    <Box
      maxWidth={"994px"}
      margin="auto"
      mt={-40}
      borderRadius="xl"
      overflow={"hidden"}
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      as="section"
    >
      <Flex>
        <Box bg="#F0EAFB" p={"60px"} textAlign="center">
          <Text fontSize={"xl"} fontWeight={800}>
            Premium PRO
          </Text>
          <Heading as='h3' fontSize={"60px"} mt="4">
            $329
          </Heading>
          <Text color="gray.900" fontSize={"lg"} fontWeight={"medium"} mt="2">
            billed just once
          </Text>
          <Button colorScheme={"purple"} width={"282px"} size="lg" mt={"6"}>
            Get Started
          </Button>
        </Box>
        <Box p="60px" fontSize={"lg"} bg="white">
          <Text textAlign={"left"}>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" spacing={5} pt="6">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
