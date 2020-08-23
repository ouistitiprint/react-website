import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ICampaignData } from "../data/campaign";

import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography, Container, Button, Grid, Link } from "@material-ui/core";
import { Instagram, Facebook, Twitter, Mail } from '@material-ui/icons';
import { theme } from "../style/theming";

const useStyles = makeStyles({
    root: {

    },
    linearProgressRoot: {
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
        return Math.round((endDate.getTime() - nowDate.getTime()) / (1000 * 3600 * 24) + 1);
    }

    function getPercentageRemainingTime(startDate: Date, endDate: Date): number {
        let nowDate: Date = new Date();
        let totalDuration: number = endDate.getTime() - startDate.getTime();
        let pastTime: number = nowDate.getTime() - startDate.getTime();
        return Math.round(pastTime * 100 / totalDuration);
    }

    const remainingDays = getRemainingDays(campaign.startDate, campaign.endDate);

    return (
        <Container className={classes.root} disableGutters>
            <LinearProgress
                variant="determinate"
                value={getPercentageRemainingTime(campaign.startDate, campaign.endDate)}
                classes={{
                    root: classes.linearProgressRoot,
                    colorPrimary: classes.linearProgressColor,
                }} />
            {/* --- Days to go --- */}
            <Typography variant="h2" component="p">
                {remainingDays}
            </Typography>
            <Typography variant="subtitle2" component="p">
                {remainingDays > 1
                    ? "days to go"
                    : "day to go"
                }
            </Typography>
            {/* --- Artists --- */}
            <Typography variant="h2" component="p">
                <Link href="#artists" color="inherit" underline={"none"}>
                    {campaign.artists.length}
                </Link>
            </Typography>
            <Typography variant="subtitle2" component="p">
                {campaign.artists.length > 1
                    ? "artists"
                    : "artist"
                }
            </Typography>

            <Button size="large" variant="contained" color="primary" className={classes.supportBtn} disableElevation href={'#perks'} fullWidth>
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
                        fullWidth
                        href={"https://www.facebook.com"} target="_blank" rel="noreferrer">
                        <Facebook />
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}
                        fullWidth
                        href={"https://www.twitter.com"} target="_blank" rel="noreferrer">
                        <Twitter />
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}
                        fullWidth
                        href={"https://www.instagram.com"} target="_blank" rel="noreferrer">
                        <Instagram />
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.socialBtn}
                        fullWidth
                        href={"mailto:?subject=Support " + campaign.foundation.name + "!&body=Visit https://ouistitiprint.com to support " + campaign.foundation.name + "!"}>
                        <Mail />
                    </Button>
                </Grid>
            </Grid>
            <Typography variant="body1" component="p" className={classes.profitDisclaimer}>
                {"All the profits from the sales will be sent to the "}
                <Link href={campaign.foundation.website} color="inherit" underline={"always"}>
                    {campaign.foundation.officialName}
                </Link>
                {" to support their actions."}
            </Typography>
        </Container>
    );
};

export default CampaignInfo;
