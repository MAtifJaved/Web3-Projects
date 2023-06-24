"use client"
import { Container, Flex,Box } from '@chakra-ui/react'
import React from 'react'

export default function Community() {
  return (
    <Flex as="main" flex={1} direction="column" mt={90}>
        <Container flex={1} maxWidth="full">
            <Box>
                Community Page
            </Box>
        </Container>
    </Flex>
  )
}
