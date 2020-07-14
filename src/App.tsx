import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Campaign from "./views/Campaign";
import { themeBLM } from "./style/theming";


export default () => (
  // Maybe possible to overide the theme in th Campaign directly
  <MuiThemeProvider theme={themeBLM}>
    <CssBaseline />
      <Campaign />
  </MuiThemeProvider>
);
