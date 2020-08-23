import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { storiesOf } from "@storybook/react";

import { theme } from "../style/theming";
import PerkCard from "./PerkCard";

import * as campaign from "../data/campaign";

const handleClick = () => {
  console.log("You clicked a PerkCard");
};

storiesOf("PerkCard", module)
  .addDecorator(story => (
    <MuiThemeProvider theme={theme}>
            {story()}
    </MuiThemeProvider>
  ))

  .add("poster", () => <PerkCard perk={campaign.blm.perks[0]} clickCheckout={handleClick} disablePerk={false}/>)
  .add("tote", () => <PerkCard perk={campaign.blm.perks[1]} clickCheckout={handleClick} disablePerk={false}/>)
  .add("stickers", () => <PerkCard perk={campaign.blm.perks[2]} clickCheckout={handleClick} disablePerk={false}/>)
  .add("cards", () => <PerkCard perk={campaign.blm.perks[3]} clickCheckout={handleClick} disablePerk={false}/>)
  .add("disable", () => <PerkCard perk={campaign.blm.perks[3]} clickCheckout={handleClick} disablePerk={true}/>);