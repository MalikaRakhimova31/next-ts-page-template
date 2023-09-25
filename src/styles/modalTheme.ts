import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: "blackAlpha.400", //change the background
    backdropFilter: "blur(2px)",
  },
  dialog: {
    borderRadius: "20px",
    bg: `white`,
    marginLeft: "16px",
    marginRight: "16px",
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
