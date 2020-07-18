import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import * as campaign from "./data/campaign";

import Campaign from "./views/Campaign";
import Footer from "./presenters/Footer";
import { theme } from "./style/theming";


export default () => (
  // Maybe possible to overide the theme in th Campaign directly
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
      <Campaign campaign={campaign.blm}/>
      <Footer/>
  </MuiThemeProvider>
);
