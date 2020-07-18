import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { ICampaignData } from "../data/campaign";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CreatorDisplay from "../presenters/CreatorsDisplay";
import CampaignDisplay from "../presenters/CampaignDisplay";


const useStyles = makeStyles(theme => ({
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    artists: {
        // flexGrow: 1,
    }
}));

export interface ICampaign {
    campaign: ICampaignData,
};

const Campaign: React.FC<ICampaign> = ({ campaign }) => { 
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <CampaignDisplay campaign={campaign}/>
            {/* --- Artists --- */}
            <Typography variant="h6" component="h2">
                Artists
            </Typography>
            <CreatorDisplay artists={campaign.artists}/>
        </Container>
        

    );
};


export default Campaign;
