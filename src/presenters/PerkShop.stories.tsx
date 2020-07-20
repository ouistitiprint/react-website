import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import PerkShop from "./PerkShop";

import * as campaign from "../data/campaign";

storiesOf("PerkShop", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("poster", () => <PerkShop perk={campaign.blm.perks[0]} foundation={campaign.blm.foundation}/>)
  .add("tote", () => <PerkShop perk={campaign.blm.perks[1]} foundation={campaign.blm.foundation}/>)
  .add("stickers", () => <PerkShop perk={campaign.blm.perks[2]} foundation={campaign.blm.foundation}/>)
  .add("cards", () => <PerkShop perk={campaign.blm.perks[3]} foundation={campaign.blm.foundation}/>);