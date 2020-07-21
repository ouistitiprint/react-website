import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ReactGA from 'react-ga';
import 'fontsource-roboto';

import * as campaign from "./data/campaign";

import Campaign from "./views/Campaign";
import Footer from "./presenters/Footer";
import { theme } from "./style/theming";

// Initialize Google Analytics
ReactGA.initialize('UA-165820072-1');
ReactGA.pageview('/homepage');


export default () => (
  // Maybe possible to overide the theme in th Campaign directly
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
      <Campaign campaign={campaign.blm}/>
      <Footer/>
  </MuiThemeProvider>
);
