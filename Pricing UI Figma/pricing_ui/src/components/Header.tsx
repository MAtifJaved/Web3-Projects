"use client";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="section" pb={28}>
      <Box
      bg="purple.600"
      h={"397px"}
      textAlign={"center"}
      color="gray.50"
      pt={"90px"}
      pb={"198px"}
      px='8'
    >
      <Heading letterSpacing="-0.01em" fontWeight={'extrabold'} fontSize="5xl">
        Simple pricing for your business
      </Heading>
      <Text pt={4} fontWeight={'medium'} fontSize="2xl" opacity={"inherit"}>
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
    </Box>
  );
}
