import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import GroteskThin from "../../assets/fonts/IDGrotesk-Thin.ttf";
import GroteskLight from "../../assets/fonts/IDGrotesk-Light.ttf";
import GroteskRegular from "../../assets/fonts/IDGrotesk-Regular.ttf";
import GroteskMedium from "../../assets/fonts/IDGrotesk-Medium.ttf";
import GroteskSemibold from "../../assets/fonts/IDGrotesk-Semibold.ttf";
import GroteskBold from "../../assets/fonts/IDGrotesk-Bold.ttf";
export const Fonts = () => (
  <Global
    styles={`@font-face{
      font-family: 'ID Grotesk Trial';
      font-style: normal;
      font-weight: 100;
      font-display: auto;
      src: url(${GroteskThin}) format('truetype')
}
@font-face{
  font-family: 'ID Grotesk Trial';
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: url(${GroteskLight}) format('truetype')
}
@font-face{
  font-family: 'ID Grotesk Trial';
  font-style: normal;
  font-weight: 400;
  font-display: auto;
  src: url(${GroteskRegular}) format('truetype')
}
@font-face{
  font-family: 'ID Grotesk Trial';
  font-style: normal;
  font-weight: 500;
  font-display: auto;
  src: url(${GroteskMedium}) format('truetype')
}
@font-face{
  font-family: 'ID Grotesk Trial';
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: url(${GroteskSemibold}) format('truetype')
}
@font-face{
  font-family: 'ID Grotesk Trial';
  font-style: normal;
  font-weight: 700;
  font-display: auto;
  src: url(${GroteskBold}) format('truetype')
}
`}
  />
);
const theme = extendTheme({
  colors: {
    black: {
      100: "#000",
      200: "#061101",
    },
    white: {
      100: "#fff",
    },
    grey: {
      100: "#F7F7F7",
      200: "#575757",
      300: "#868686",
      400: "#ddd",
    },
    blue: {
      100: "#00082F",
      200: "#0095E8",
    },
    red: {
      100: "#FF8800",
      200: "#FF7B00",
      300: "#F35B04"
    },
    purple: {
      100: "#9FA0FF",
      200: "#D5A9FF",
      300: "#FBF8FF",
      400: "#757BC8",
      // 500: "#E0C3FC",
    },
  },
  fonts: {
    body: `'ID Grotesk Trial', sans-serif `,
  },
});
export default theme;