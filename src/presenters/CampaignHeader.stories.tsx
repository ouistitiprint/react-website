import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import CampaignHeader from "./CampaignHeader";

import * as campaign from "../data/campaign";
import { logo } from "../data/images/platform/logo"

storiesOf("CampaignHeader", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("default", () => <CampaignHeader logo={logo.gray} logoFoundation={campaign.blm.foundation.logo} title={campaign.blm.title} subtitle={campaign.blm.subtitle}/>);