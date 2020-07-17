import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import CreatorsDisplay from "./CreatorsDisplay";

import * as artists from "../data/artists";

const listArtists: artists.IArtistsData[] = [
    artists.priya, artists.johari,
]

storiesOf("CreatorsDisplay", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("default", () => <CreatorsDisplay artists={listArtists}/>);
