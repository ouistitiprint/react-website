import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { ICampaignData } from "../data/campaign";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CreatorDisplay from "../presenters/CreatorsDisplay";
import CampaignDisplay from "../presenters/CampaignDisplay";
import CampaignHeader from "../presenters/CampaignHeader";

import { logo } from "../data/images/platform/logo";
import PerksDisplay from "../presenters/PerksDisplay";


const useStyles = makeStyles(theme => ({
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      paddingTop: theme.spacing(5),
    },
}));

export interface ICampaign {
    campaign: ICampaignData,
};

const Campaign: React.FC<ICampaign> = ({ campaign }) => { 
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {/* --- Campaign Header --- */}
            <CampaignHeader logo={logo.gray} logoFoundation={campaign.foundation.logo} title={campaign.title} subtitle={campaign.subtitle}/>
            {/* --- Campaign Display --- */}
            <CampaignDisplay campaign={campaign}/>
            {/* --- Description --- */}
            <Typography variant="h4" component="h2">
                {"Campaign"}
            </Typography>
            <Typography variant="body1" component="p">
                {campaign.description}
            </Typography>
            {/* --- Artworks --- */}
            <Typography variant="h4" component="h2">
                {"Perks"}
            </Typography>
            <Typography variant="body1" component="p">
                {campaign.perksDescription}
            </Typography>
            <PerksDisplay campaign={campaign}/>
            {/* --- Artists --- */}
            <Typography variant="h4" component="h2">
                {"Artists"}
            </Typography>
            <CreatorDisplay artists={campaign.artists}/>
        </Container>
        

    );
};


export default Campaign;
