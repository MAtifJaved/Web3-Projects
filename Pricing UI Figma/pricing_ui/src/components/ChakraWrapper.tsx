"use client"
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react';

type props =  {
    children: ReactNode
}

function ChakraWrapper({children}: props) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default ChakraWrapper;