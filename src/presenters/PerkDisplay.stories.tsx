import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import PerksDisplay from "./PerksDisplay";

import * as campaign from "../data/campaign";

// const listPerks: campaign.IPerkCampaign[] = campaign.blm.perks

storiesOf("CreatorsDisplay", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("default", () => <PerksDisplay campaign={campaign.blm}/>);