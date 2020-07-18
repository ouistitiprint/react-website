import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Image from 'material-ui-image';
import { ICampaignData } from "../data/campaign";
import CampaignInfo from "./CampaignInfo";
import { Container, Grid } from "@material-ui/core";


const useStyles = makeStyles({
    root :{

    },
});

export interface ICampaignDisplay {
    campaign: ICampaignData,
};

const CampaignDisplay: React.FC<ICampaignDisplay> = ({ campaign }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root} disableGutters>
            <Grid container
                >
                <Grid item xs={8}>
                    <Image
                        src={campaign.illustration}
                        aspectRatio={(16/9)}/>
                </Grid>
                <Grid item xs={4}>
                    <CampaignInfo campaign={campaign}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CampaignDisplay;