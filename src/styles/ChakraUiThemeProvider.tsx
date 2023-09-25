import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Montserrat } from "next/font/google";
import colors from "./colors";

import { modalTheme } from "./modalTheme";
import accordionTheme from "./accordionTheme";
import { switchTheme } from "./switchTheme";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const boxShadow =
  "0px 29px 65px 10px rgba(0, 25, 97, 0.15), 0px 8px 16px 1px rgba(0, 25, 97, 0.10)";

type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>;

export const ChakraUiThemeProvider = ({
  children,
}: ComponentWithChildProps) => {
  // Chakra UI's blue
  const blue = {
    900: "#1A365D",
    800: "#2A4365",
    700: "#2C5282",
    600: "#2B6CB0",
    500: "#3182CE",
    400: "#4299E1",
    300: "#63B3ED",
    200: "#90CDF4",
    100: "#BEE3F8",
    50: "#EBF8FF",
  };

  const theme = extendTheme({
    components: {
      Button: {
        variants: {
          solid: {
            borderRadius: "6px",

            background: "primary.main",
            color: "white",
            height: "54px",
            fontWeight: "400 !important",

            textAlign: "center !important",
            _hover: {
              background: "primary.main",
              color: "white",
            },
            _focusVisible: {
              background: "primary.main",
            },
            _focus: {
              background: "primary.main",
            },
          },
          unstyled: {
            borderRadius: "100px",
            width: "max-content",
            background: "primary.main",
            color: "white",
            height: "56px",
            fontWeight: "600 !important",
            display: "flex !important",
            alignItems: "center !important",
            // justifyContent: "space-between !important",
            _hover: {
              background: "primary.main",
              color: "white",
            },
            _focusVisible: {
              background: "primary.main",
            },
            _focus: {
              background: "primary.main",
            },
          },
          outline: {
            borderRadius: "6px",
            borderColor: "#C0E1FF",
            width: "max-content",
            height: "156px",
            background: "white",

            fontWeight: "400 !important",
            fontFamily: "FactorA",
            color: "#339DFF",
            padding: "13px",
            border: "1px solid",
            fontSize: "16px",
            display: "flex !important",
            alignItems: "center !important",
            justifyContent: "center !important",
            _hover: {
              borderColor: "#C0E1FF",
              background: "white",
              color: "#339DFF",
            },
            // _focusVisible: {
            //   background: "#339DFF",
            //   color: "white",
            // },
            // _focus: {
            //   background: "#339DFF",
            //   color: "white",
            // },
          },
          ghost: {
            borderRadius: "8px",
            width: "max-content",
            height: "53px",
            background: "#EBFAF9",
            color: "primary.main",
            fontWeight: "500 !important",
            border: "none",
            fontSize: "16px",
            _hover: {
              // borderColor: "errorColor",
              boxShadow: "0px 4px 20px 0px rgba(255, 78, 78, 0.30)",
              background: "#0ABAB5",
              color: "white",
            },
          },
          danger: {
            borderRadius: "8px",
            width: "max-content",
            height: "53px",
            background: "#FF4E4E",
            color: "white",
            fontWeight: "500 !important",
            border: "none",
            fontSize: "16px",
            _hover: {
              // borderColor: "errorColor",
              boxShadow: "0px 4px 20px 0px rgba(255, 78, 78, 0.30)",
            },
          },
          greenText: {
            borderRadius: "8px",
            width: "max-content",
            height: "48px",
            background: "white",
            color: "#23A566",
            fontWeight: "500 !important",
            borderWidth: "1px",
            borderColor: "border",
            fontSize: "16px",
            _hover: {
              boxShadow: "0px 0px 5px 0px rgba(10, 186, 181, 0.15);",
              borderColor: "#23A566",
            },
          },
          statusButton: {
            borderRadius: "8px",
            width: "max-content",
            height: "41px",
            background: "#EBFAF9",
            color: "#0ABAB5",
            fontWeight: "500 !important",
            borderWidth: "none",
            borderColor: "none",
            fontSize: "14px",
            _hover: {
              boxShadow: "0px 0px 5px 0px rgba(10, 186, 181, 0.15);",
              borderColor: "#23A566",
            },
          },
          blackButton: {
            borderRadius: "100px",
            width: "100%",
            height: "56px",
            background: "secondary.main",
            padding: "0 24px",
            color: "white",
            fontWeight: "600 !important",
            border: "none",
            fontSize: "15px",
            _hover: {
              color: "white",
              background: "secondary.main",
            },
          },
          gray: {
            borderRadius: "8px",
            width: "100%",
            height: "41px",
            background: "white",
            color: "#393D4E",
            fontWeight: "500 !important",
            border: "1px solid",
            borderColor: "#E7EAF0",
            fontSize: "16px",

            _hover: {
              boxShadow: "0px 0px 5px 0px rgba(10, 186, 181, 0.15);",
            },
          },
        },
      },
      Accordion: accordionTheme,
      Table: {
        variants: {
          simple: {
            th: {
              padding: "16px 0",
              borderColor: "#E7EAF0",
              fontSize: "12px",
              fontWeight: "400",
              color: "#8E93AA",
              maxWidth: "330px !important",
            },
            td: {
              borderColor: "#E7EAF0",
              padding: "16px 0",
              color: "secondary.main",
              fontSize: "14px",
              fontWeight: "400",
              whiteSpace: "wrap",
              maxWidth: "315px",
              "&:last-child": {
                borderColor: "none",
              },
            },
          },
        },
      },
      Checkbox: {
        baseStyle: {
          control: {
            bg: "transparent",
            _checked: {
              bg: "primary.main",
              border: "none",
            },
          },
        },
      },
      Switch: switchTheme,
      Modal: modalTheme,
      InputGroup: {
        baseStyle: {
          background: "red",
          _focusVisible: {
            border: "1px solid",
            borderColor: "red",
          },
        },
      },
    },
    colors,
    fonts: {
      body: montserrat.style.fontFamily,
      heading: montserrat.style.fontFamily,
    },
    // },
    styles: {
      global: (props: any) => ({
        body: {
          // mode ("color for light mode (string)", "color for dark mode (string)")
          backgroundColor: `#FFFFFF`,
          color: `gray.600`,
          bg: mode(`gray.50`, `gray.50`)(props),
        },

        button: {
          fontWeight: `normal !important`,
        },
        "*, *::before, ::after": {
          wordWrap: "normal",
        },
      }),
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
