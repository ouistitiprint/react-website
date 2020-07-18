import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import Footer from "./Footer";

storiesOf("Footer", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("default", () => <Footer/>);