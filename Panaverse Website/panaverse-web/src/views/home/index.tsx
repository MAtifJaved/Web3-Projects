"use client"

import { Flex, FlexProps } from "@chakra-ui/react"
export default function Home(props:FlexProps) {
  return (
    <Flex as="main" role="main" direction={"column"} flex={1} {...props} mt={90}>
      Home
    </Flex>
  )
}
