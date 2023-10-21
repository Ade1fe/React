import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: {
      100: "#000",
      200: "#00082F",
      
    },
    white: {
      100: "#fff",
      200: '#bc6c25'
    },
    red: {
      100: "#9b2226"
    },
    green: {
      100: "#003e1f",
      200: "#d8f3dc"
    },
  
  },
});

export default theme;