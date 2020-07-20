import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ICampaignData } from "../data/campaign";

import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography, Container, Button, Grid, Link } from "@material-ui/core";
import { Instagram, Facebook, Twitter, LinkedIn, Mail } from '@material-ui/icons';
import { theme } from "../style/theming";

const useStyles = makeStyles({
    root: {

    },
    linearProgressRoot:{
        height: 12,
    },
    linearProgressColor: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    supportBtn: {
        borderRadius: 0,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    socialBtn: {
        borderRadius: 0,
    },
    linkFondation: {
        textDecorationLine: 'underline',
    },
    profitDisclaimer: {
        marginTop: theme.spacing(1),
        textAlign: "justify",
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
                value={getPercentageRemainingTime(campaign.startDate, campaign.endDate)}
                classes={{
                    root: classes.linearProgressRoot,
                    colorPrimary: classes.linearProgressColor,
                }} />
            <Typography variant="h2" component="p">
                {getRemainingDays(campaign.startDate, campaign.endDate)}
            </Typography>
            <Typography variant="subtitle2" component="p">
                {"days to go"}
            </Typography>
            <Typography variant="h2" component="p">
                {campaign.artists.length}
            </Typography>
            <Typography variant="subtitle2" component="p">
                {"artists"}
            </Typography>
            <Button size="large" variant="contained" color="primary" className={classes.supportBtn} disableElevation fullWidth>
                {"Support This Campaign"}
            </Button>
            <Grid container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={1}>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}
                        fullWidth>
                        <Facebook />
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}
                        fullWidth>
                        <Twitter />
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}
                        fullWidth>
                        <Instagram />
                    </Button>
                </Grid>
                {/* <Grid item xs>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}>
                        <LinkedIn />
                    </Button>
                </Grid> */}
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}
                        fullWidth
                        >
                        <Mail />
                    </Button>
                </Grid>
            </Grid>
            <Typography variant="body1" component="p" className={classes.profitDisclaimer}>
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
