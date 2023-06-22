"use client";
import { Container, Flex, Heading, SimpleGrid, VStack, Text, FlexProps } from "@chakra-ui/react";
import MotionBox from "../home/sections/motionBox";
import ListArticles from "./chakraBlog";

export default function Blogs(props:FlexProps) {
  return (
    <Flex 
      as="main"
      role={"main"}
      direction="column"
      flex={1}
      mt={150}
      pb={100}
      {...props}
      >
      <Container maxW={"full"} flex={1}>
        <MotionBox>
          <Container maxW={"container.lg"}>
            <SimpleGrid spacing={2} templateColumns={{ sm: "1fr", md: "1fr 1fr" }}>
              <ListArticles/>
              <ListArticles/>
              <ListArticles/>
            </SimpleGrid>
          </Container>
        </MotionBox>
        <MotionBox>
          <Container maxWidth={"container.lg"} >
            <VStack paddingTop={"40px"} spacing="2" alignItems={"flex-start"} >
              <Heading >What we write About</Heading>
              <Text fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                pretium condimentum dignissim. Vestibulum ultrices vitae nisi
                sed imperdiet. Mauris quis erat consequat, commodo massa quis,
                feugiat sapien. Suspendisse placerat vulputate posuere.
                Curabitur neque tortor, mattis nec lacus non, placerat congue
                elit.
              </Text>
              <Text as="p" fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                pretium condimentum dignissim. Vestibulum ultrices vitae nisi
                sed imperdiet. Mauris quis erat consequat, commodo massa quis,
                feugiat sapien. Suspendisse placerat vulputate posuere.
                Curabitur neque tortor, mattis nec lacus non, placerat congue
                elit.
              </Text>
              <Text as="p" fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
                pretium condimentum dignissim. Vestibulum ultrices vitae nisi
                sed imperdiet. Mauris quis erat consequat, commodo massa quis,
                feugiat sapien. Suspendisse placerat vulputate posuere.
                Curabitur neque tortor, mattis nec lacus non, placerat congue
                elit.
              </Text>
            </VStack>
          </Container>
        </MotionBox>
      </Container>
    </Flex>
  );
}
