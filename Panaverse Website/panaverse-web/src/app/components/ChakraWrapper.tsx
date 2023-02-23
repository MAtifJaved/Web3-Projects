"use client"
import { ChakraProvider} from '@chakra-ui/react';
import { ReactNode } from 'react';
import theme from '@/assets/theme';

type props =  {
    children: ReactNode
}


function ChakraWrapper({children}: props) {
  return (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
  )
}

export default ChakraWrapper;