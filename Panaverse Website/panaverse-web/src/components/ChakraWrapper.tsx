"use client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "@/assets/theme";

type props = {
  children: ReactNode;
};

function ChakraWrapper({ children }: props) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}

export default ChakraWrapper;
