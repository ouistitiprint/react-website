import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import CampaignDisplay from "./CampaignDisplay";

import * as campaign from "../data/campaign";

storiesOf("CampaignDisplay", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("default", () => <CampaignDisplay campaign={campaign.blm}/>);