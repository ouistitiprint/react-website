import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import CampaignInfo from "./CampaignInfo";

import * as campaign from "../data/campaign";

storiesOf("CampaignInfo", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("default", () => <CampaignInfo campaign={campaign.blm}/>);