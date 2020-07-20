import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import PerkShopCard from "./PerkShopCard";

import * as campaign from "../data/campaign";

storiesOf("PerkShopCard", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("poster", () => <PerkShopCard perk={campaign.blm.perks[0].perk} artwork={campaign.blm.perks[0].defaultArtwork}/>)
  .add("tote", () => <PerkShopCard perk={campaign.blm.perks[1].perk} artwork={campaign.blm.perks[1].defaultArtwork}/>)
  .add("stickers", () => <PerkShopCard perk={campaign.blm.perks[2].perk} artwork={campaign.blm.perks[2].defaultArtwork}/>)
  .add("cards", () => <PerkShopCard perk={campaign.blm.perks[3].perk} artwork={campaign.blm.perks[3].defaultArtwork}/>);