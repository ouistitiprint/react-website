import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Image from 'material-ui-image';
import { ICampaignData } from "../data/campaign";
import CampaignInfo from "./CampaignInfo";
import { Container, Grid } from "@material-ui/core";
import { theme } from "../style/theming";


const useStyles = makeStyles({
    root :{
        marginTop: theme.spacing(3),
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
                spacing={2}

                >
                <Grid item xs={12} md={8}>
                    <Image
                        src={campaign.illustration}
                        aspectRatio={(16/9)}
                        disableSpinner/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CampaignInfo campaign={campaign}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CampaignDisplay;