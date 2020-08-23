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
    
    //   TODO: Having to calculate this here is not the best options --> context?
    const isDisable = () => {
        let nowDate: Date = new Date();
        let remainingDays: number = Math.round((campaign.endDate.getTime() - nowDate.getTime()) / (1000 * 3600 * 24) + 1);
        return remainingDays < 1;
    }

    return (
        <Container disableGutters>
            <DialogPerkShop perk={perkInShop} foundation={campaign.foundation} showShop={showShop} setShowShop={setShowShop}/>
        <Grid container className={classes.root} 
            direction="row"
            justify="flex-start"
            alignItems="flex-start" spacing={2}>
        {perks.map((perk) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={perk.perk.name.replace(/\s+/g, '')}>
                    <PerkCard perk={perk} clickCheckout={() => handleClickCheckout(perk)} disablePerk={isDisable()}/>
                </Grid>
            );
        })}
        </Grid>
        </Container>
    );
};


export default PerksDisplay;