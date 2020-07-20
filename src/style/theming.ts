import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
// import type '@material-ui/lab/themeAugmentation'; // https://material-ui.com/components/about-the-lab/#typescript

import * as colors from "./colors";
import { baseFontSize, fontFamily } from "./typography";

export const themeOptions: ThemeOptions = {
  typography: {
    fontSize: baseFontSize,
    fontFamily: fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: colors.blmYellow,
    },
    secondary: {
      main: colors.blmBlack,
    },
    background: {
      default: colors.blmWhite,
    }
  },
};

export const theme = createMuiTheme(themeOptions);
