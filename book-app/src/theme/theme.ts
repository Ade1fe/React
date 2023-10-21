import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: {
      100: "#000",
      200: "#1A202C",
      
    },
    white: {
      100: "#fff",
      200: '#bc6c25'
    },
    red: {
      100: "#9b2226"
    },
    green: {
      100: "#718096",
      200: "#A0AEC0"
    },
  
  },
});

export default theme;