import ChakraWrapper from "@/components/ChakraWrapper";
import { Suspense } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Loading from "./loading";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraWrapper>
          <Suspense fallback={<Loading />}>
          <Navbar/>
          {children}
          <Footer/>
          </Suspense>
        </ChakraWrapper>
      </body>
    </html>
  )
}
