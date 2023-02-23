"use client"
import { Box, Flex, Link, Stack, Text, Button, IconButton, useDisclosure  } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import NextLink from 'next/link';
import DesktopNav from './DesktopNav';


export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box as="nav" role='presentation'>
      <Flex
        bg='white'
        minH={"90px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={"yellow.600"}
        align="center">
        <Flex flex={{ base: 1 }} justify={{ base: "start"}}>
          <Link as={NextLink} href="/">
            <Image
              src="/panaverse-logo.png"
              alt='panaverse-logo'
              width={100}
              height={50}
            />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10} alignItems={"center"} flex={1}>
            <DesktopNav/>
          </Flex>
        </Flex>
          <Stack flex={{base:0}} justify={"flex-end"} direction="row" spacing= {6}>
            <Link
            as ={NextLink}
            isExternal
            href={"https://github.com/panaverse"} 
            margin ='auto'
            display={{ base:"none", md:"inline-flex"}}
            >
              <Button
              fontWeight={400}
              variant="link"
              color={"black"}
              rightIcon={<ExternalLinkIcon/>}
              >
                Github
              </Button>
            </Link>
            <Link
            as ={NextLink}
            isExternal
            href={"https://portal.piaic.org/signup"} 
            margin ='auto'
            // display={{ base:"none", md:"inline-flex"}}
            >
              <Button
              fontWeight={400}
              colorScheme="messenger"
              justifyContent={{ base:"flex-end" }}
              display={{ base:"none", md:"inline-flex"}}
              >
                Apply
              </Button>
            </Link>
          </Stack>
        <Flex 
        flex={{base: 1, md:"auto"}}
        ml={{base:-2}}
        display={{ base: "flex", md: "none" }}
        justify="end"
        >
          <IconButton
          onClick={onToggle}
          bg="transparent"
          icon={isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={3} h={3} />}
          variant="ghost"
          aria-label='Toggle Navigation' />
        </Flex>
      </Flex>
    </Box>
  )
}
