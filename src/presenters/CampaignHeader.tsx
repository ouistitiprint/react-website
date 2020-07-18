import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root :{
        textAlign: "center",
    },
    logos :{
        textAlign: "center",
        maxWidth: 345,
        margin: "auto",
    }
});

export interface ICampaignHeader {
    logo: string,
    logoFoundation: string,
    title: string,
    subtitle: string,
};

const CampaignHeader: React.FC<ICampaignHeader> = ({ logo, logoFoundation, title, subtitle }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root} disableGutters>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
                className={classes.logos}>
                <Grid item xs>
                    <Image
                        src={logo}/>
                </Grid>
                <Grid item xs>
                    <Typography variant="h2" component="h2">{"X"}</Typography>
                </Grid>
                <Grid item xs>
                    <Image
                        src={logoFoundation}/>
                </Grid>
            </Grid>
            <Typography variant="h3" component="h1">{title}</Typography>
            <Typography variant="subtitle1" component="h2">{subtitle}</Typography>
        </Container>
    );
};

export default CampaignHeader;