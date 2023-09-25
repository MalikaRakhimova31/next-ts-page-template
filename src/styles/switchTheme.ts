import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
    width: "42px",
    height: "25px",
  },
  thumb: {
    bg: "white",
    boxShadow: " 0px 10px 20px 0px rgba(98, 71, 3, 0.20)",
    width: "25px",
    height: "25px",
  },
  track: {
    bg: "#EFEDE9",
    width: "39px",
    height: "25px",
    display: "flex",
    alignItems: "center",
    _checked: {
      bg: "#4CD964",
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
