import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Typography, Link } from "@material-ui/core";
import { theme } from "../style/theming";

const useStyles = makeStyles({
    root :{
        textAlign: "center",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
    },
});

export interface IFooter {};

const Footer: React.FC<IFooter> = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} disableGutters>
            <Typography variant="body2" component="p" gutterBottom>
                {"Ouistiti Print is a service by Vandroux Unlimited Engineering."}
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
            <Link href={"https://www.facebook.com/ouistitiprint"} target="_blank" rel="noreferrer"  color={"inherit"}>{"Facebook"}</Link>
            {" | "}
            <Link href={"https://m.me/ouistitiprint"} target="_blank" rel="noreferrer" color={"inherit"}>{"Messenger"}</Link>
            {" | "}
            <Link href={"https://www.instagram.com/ouistitiprint/"} target="_blank" rel="noreferrer" color={"inherit"}>{"Instagram"}</Link>
            {" | "}
            <Link href={"mailto:contact@vueng.ch"} color={"inherit"}>{"Contact"}</Link>
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
                {"© 2020 VU Engineering"}
            </Typography>
        </Container>
    );
};

export default Footer;