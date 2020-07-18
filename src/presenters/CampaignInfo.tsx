import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ICampaignData } from "../data/campaign";

import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography, Container, Button, Grid, Link } from "@material-ui/core";
import { Instagram, Facebook, Twitter, LinkedIn, Mail } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {

    },
    supportBtn: {

    },
    socialBtn: {

    },
    linkFondation: {
        textDecorationLine: 'underline',
    }
});

export interface ICampaignInfo {
    campaign: ICampaignData,
}

const CampaignInfo: React.FC<ICampaignInfo> = ({ campaign }) => {
    const classes = useStyles();

    function getRemainingDays(startDate: Date, endDate: Date): number {
        let nowDate: Date = new Date();
        return Math.round((endDate.getTime() - nowDate.getTime()) / (1000 * 3600 * 24));
    }

    function getPercentageRemainingTime(startDate: Date, endDate: Date): number {
        let nowDate: Date = new Date();
        let totalDuration: number = endDate.getTime() - startDate.getTime();
        let pastTime: number = nowDate.getTime() - startDate.getTime();
        return Math.round(pastTime * 100 / totalDuration);
    }

    return (
        <Container className={classes.root} disableGutters>
            <LinearProgress
                variant="determinate"
                value={getPercentageRemainingTime(campaign.startDate, campaign.endDate)} />
            <Typography variant="h1" component="h1">
                {getRemainingDays(campaign.startDate, campaign.endDate)}
            </Typography>
            <Typography variant="h6" component="h2">
                {"days to go"}
            </Typography>
            <Typography variant="h1" component="h1">
                {campaign.artists.length}
            </Typography>
            <Typography variant="h6" component="h2">
                {"creators"}
            </Typography>
            <Button size="large" variant="contained" color="primary" className={classes.supportBtn} disableElevation fullWidth>
                {"Support This Campaign"}
            </Button>
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                spacing={2}>
                <Grid item xs>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}>
                        <Facebook />
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}>
                        <Twitter />
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}>
                        <Instagram />
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}>
                        <LinkedIn />
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}>
                        <Mail />
                    </Button>
                </Grid>
            </Grid>
            <Typography variant="body1" component="p">
                {"All the profits from the sales will be sent to "}
                <Link className={classes.linkFondation} href={campaign.foundation.website} color="inherit">
                    {campaign.foundation.name}
                </Link>
                {" to support their actions."}
            </Typography>

        </Container>
    );
};

export default CampaignInfo;
