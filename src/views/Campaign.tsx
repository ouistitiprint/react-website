import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { ICampaignData } from "../data/campaign";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CreatorDisplay from "../presenters/CreatorsDisplay";
import CampaignDisplay from "../presenters/CampaignDisplay";
import CampaignHeader from "../presenters/CampaignHeader";

import { logo } from "../data/images/platform/logo";
import PerksDisplay from "../presenters/PerksDisplay";
import { setQueryStringValue, getPaymentStatus } from "../helpers/queryString";
import DialogPaymentSuccessful from "./DialogPaymentSuccessful";
import DialogPaymentCanceled from "./DialogPaymentCanceled";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: theme.spacing(5),
    },
    campaignSection: {
        marginTop: theme.spacing(3),
    }
}));

export interface ICampaign {
    campaign: ICampaignData,
};

const Campaign: React.FC<ICampaign> = ({ campaign }) => {
    const classes = useStyles();

    // Get the status for the address bar
    const currentPaymentStatus = getPaymentStatus();
    const [paymentStatus, setPaymentStatus] = useState(currentPaymentStatus);

    useEffect(() => {
        setQueryStringValue("status", paymentStatus);
    }, [paymentStatus]);

    return (
        <Container className={classes.root}>
            <DialogPaymentSuccessful
                showDialog={paymentStatus === "paymentSuccessful"}
                closeDialog={() => setPaymentStatus("shopping")} />
            <DialogPaymentCanceled
                showDialog={paymentStatus === "paymentCanceled"}
                closeDialog={() => setPaymentStatus("shopping")} />
            {/* --- Campaign Header --- */}
            <CampaignHeader logo={logo.gray} logoFoundation={campaign.foundation.logo} title={campaign.title} subtitle={campaign.subtitle} />
            {/* --- Campaign Display --- */}
            <CampaignDisplay campaign={campaign} />
            {/* --- Description --- */}
            <Container className={classes.campaignSection} disableGutters>
                <Typography variant="h4" component="h2" gutterBottom>
                    {"Campaign"}
                </Typography>
                <Typography variant="body1" component="p">
                    {campaign.description}
                </Typography>
            </Container>
            {/* --- Perks --- */}
            <Container className={classes.campaignSection} id={"perks"} disableGutters>
                <Typography variant="h4" component="h2" gutterBottom>
                    {"Perks"}
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    {campaign.perksDescription}
                </Typography>
                <PerksDisplay campaign={campaign} />
            </Container>
            {/* --- Artists --- */}
            <Container className={classes.campaignSection} id={"artists"} disableGutters>
                <Typography variant="h4" component="h2" gutterBottom>
                    {"Artists"}
                </Typography>
                <CreatorDisplay artists={campaign.artists} />
            </Container>
        </Container>
    );
};

export default Campaign;
