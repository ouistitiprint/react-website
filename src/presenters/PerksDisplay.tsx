import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { IPerkCampaign, ICampaignData } from "../data/campaign";
import PerkCard from "./PerkCard";
import { Container } from "@material-ui/core";
import DialogPerkShop from "../views/DialogPerkShop";

const useStyles = makeStyles(theme => ({
    root: {

    },
}));

export interface IPerksDisplay {
    campaign: ICampaignData,
};

const PerksDisplay: React.FC<IPerksDisplay> = ({ campaign }) => { 
    const classes = useStyles();

    const perks = campaign.perks;

    const [showShop, setShowShop] = useState(false);
    const [perkInShop, setPerkInShop] = useState(perks[0]);

    const handleClickCheckout = (perk: IPerkCampaign) => {
        setShowShop(true);
        setPerkInShop(perk);
      };

    return (
        <Container disableGutters>
            <DialogPerkShop perk={perkInShop} foundation={campaign.foundation} showShop={showShop} setShowShop={setShowShop}/>
        <Grid container className={classes.root} 
            direction="row"
            justify="flex-start"
            alignItems="flex-start" spacing={2}>
        {perks.map((perk) => {
            return (
                <Grid item xs={12} sm={6} md={4}>
                    <PerkCard perk={perk} clickCheckout={() => handleClickCheckout(perk)}/>
                </Grid>
            );
        })}
        </Grid>
        </Container>
    );
};


export default PerksDisplay;