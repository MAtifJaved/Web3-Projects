"use client"
import { NAV_ITEMS } from '@/utils/constants';
import { Text, Stack, Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function DesktopNav() {
  return (
    <Stack direction={"row"} spacing={4}>
    {NAV_ITEMS.map((nav) =>
      <Box key={nav.label}>
        <Link
         as={NextLink}
         href={nav.href ?? "#" } 
         p={2} 
         color={"gray.900"}
         fontSize="sm" 
         _hover={{ color: "blue" }}
         >{nav.label}
        </Link>
      </Box> 
      )}
    </Stack>
  )
}
