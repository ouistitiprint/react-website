import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles({
    root :{
        textAlign: "center",
    },
});

export interface IFooter {};

const Footer: React.FC<IFooter> = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} disableGutters>
            <Typography variant="body2" component="p">
                {"Ouistiti Print is a service by Vandroux Unlimited Engineering. © 2020 VU Engineering"}
            </Typography>
            <Link href={"mailto:contact@vueng.ch"}>{"Contact"}</Link>
        </Container>
    );
};

export default Footer;