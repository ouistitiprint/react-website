import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

import * as colors from "./colors";
import { baseFontSize, fontFamily } from "./typography";

export const themeOptions: ThemeOptions = {
  typography: {
    fontSize: baseFontSize,
    fontFamily: fontFamily,
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
