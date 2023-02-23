"use client"
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
    styles: {
        global: (props:any) => ({
          'html, body': {
            minHeight:"100vh",
            margin:0,
            display:"flex",
            flexDirection:"column"
            
          },
          ".slick-slide":{
            margin:"0 20px",
          },
          ".slick-list":{
            margin:"0 -10px",
          },
        }),
      },
  "colors": {
    "blue": {
      "50": "#E7EFFD",
      "100": "#BDD1F9",
      "200": "#93B4F6",
      "300": "#6997F2",
      "400": "#3E79EF",
      "500": "#145CEB",
      "600": "#104ABC",
      "700": "#0C378D",
      "800": "#08255E",
      "900": "#04122F"
    }
  }
}
)


export default theme;

