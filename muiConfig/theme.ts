import colors from "./colors";
import { createTheme } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    sm: true;
    screen_580: true;
    md: true;
    lg: true;
    xl: true;
    xsm: true;
    tab: true;
    screen_1300: true;
    "2xl": true;
    "3xl": true;
  }
}
declare module "@mui/material/styles" {
  interface CommonColors {
    shamRock: string;
    paua: string;
    suvaGrey: string;
    link: string;
    lightBlue900: string;
    text: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

const customBreakpoints = {
  values: {
    xs: 0,
    xsm: 400,
    sm: 507,
    screen_580: 580,
    md: 768,
    tab: 800,
    lg: 1024,
    xl: 1200,
    screen_1300: 1300,
    "2xl": 1450,
    "3xl": 1800,
  },
};
const breakpoints = createBreakpoints({ ...customBreakpoints });

export const theme = createTheme({
  palette: {
    common: {
      ...colors,
    },
  },
  typography: {
    fontFamily: '"Avenir Next LT Pro", sans-serif',
  },
  // components: {
  //   MuiButton: {
  //     variants: [
  //       {
  //         props: { variant: "primary" },
  //         style: {
  //           color: colors.white,
  //           width: "100%",
  //           padding: "20px 0px",
  //           fontSize: "16px",
  //           fontWeight: "700",
  //           lineHeight: "24px",
  //           borderRadius: "16px",
  //           textTransform: "none",
  //           backgroundColor: colors.summerSky,
  //           "&:hover": {
  //             transition: "600ms",
  //             backgroundColor: colors.denim,
  //           },
  //         },
  //       },
  //       {
  //         props: { variant: "outlined" },
  //         style: {
  //           color: colors.summerSky,
  //           width: "100%",
  //           padding: "20px 37px",
  //           fontSize: "16px",
  //           fontWeight: "700",
  //           lineHeight: "24px",
  //           borderRadius: "16px",
  //           textTransform: "none",
  //           backgroundColor: colors.lavender,
  //           border: `2px solid`,
  //           "&:hover": {
  //             transition: "600ms",
  //             backgroundColor: colors.lavender,
  //             border: `2px solid`,
  //           },
  //           [breakpoints.down(450)]: {
  //             padding: "14px 15px",
  //             fontSize: "12px",
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  breakpoints: customBreakpoints,
});
