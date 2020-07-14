import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

import * as colors from "./colors";
import { baseFontSize, fontFamily } from "./typography";

export const themeOptionsBLM: ThemeOptions = {
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
  },
};

export const themeBLM = createMuiTheme(themeOptionsBLM);
