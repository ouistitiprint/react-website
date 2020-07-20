import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import ArtworkButton from "./ArtworkButton";

import * as artwork from "../data/artworks";

const handleClick = () => {
    console.log("You clicked a PerkCard");
  };

storiesOf("ArtworkButton", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("default", () => <ArtworkButton artwork={artwork.kobeBryant} handleClick={handleClick}/>);