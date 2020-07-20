import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import { Typography } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import { theme } from "../style/theming";

const useStyles = makeStyles({
    root: {
        textAlign: "center",
    },
    logos: {
        textAlign: "center",
        maxWidth: 345,
        margin: "auto",
    },
    title: {
        fontSize: "2.2rem",
        fontWeight: 600,
        lineHeight: 1,
    },
    subtitle:{
        fontSize: "1.05rem",
        // fontWeight: 600,
        // lineHeight: 1,
    },
    textContainer: {
        paddingTop: theme.spacing(3),
    },
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
                direction={"row"}
                justify={"center"}
                alignItems={"center"}
                spacing={0}
                className={classes.logos}>
                <Grid item xs={4}>
                    <Image
                        src={logo}
                        color={"transparent"}
                        animationDuration={0} />
                </Grid>
                <Grid item xs={2}>
                    {/* <Typography variant="h2" component="h2">{"X"}</Typography> */}
                    <ClearIcon fontSize={"large"} />
                </Grid>
                <Grid item xs={4}>
                    <Image
                        src={logoFoundation}
                        color={"transparent"}
                        animationDuration={0} />
                </Grid>
            </Grid>
            <Container className={classes.textContainer}>
                <Typography variant="h3" component="h1" className={classes.title}>{title}</Typography>
                <Typography variant="subtitle1" component="p" className={classes.subtitle}>{subtitle}</Typography>
            </Container>
        </Container>
    );
};

export default CampaignHeader;