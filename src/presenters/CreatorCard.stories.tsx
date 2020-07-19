import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import CreatorCard from "./CreatorCard";

import * as artists from "../data/artists";

storiesOf("CreatorCard", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("default", () => <CreatorCard artist={artists.joharistone}/>);

  
