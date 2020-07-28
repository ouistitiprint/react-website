import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { IPerkCampaign } from "../data/campaign";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import { IArtworksData } from "../data/artworks";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
    root: {

    },
    card: {
        // maxWidth: 345,
        boxShadow: 'none',
        borderRadius: 0,
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.125)',
    },
    media: {
        height: 345,
    },
    title: {
        textTransform: "capitalize",
    },
    buyBtn: {
        borderRadius: 0,
    },
    perkDescription: {
        height: "6em",
        overflow: "hidden",
    },
});

export interface IPerkCard {
    perk: IPerkCampaign,
    clickCheckout: () => void;
}

const PerkCard: React.FC<IPerkCard> = ({ perk, clickCheckout }) => {
    const classes = useStyles();

    // To get the right mockup according to the perk type
    const getKeyValue = <U extends keyof T, T extends object>(
        key: U,
        obj: T
    ) => obj[key]

    return (
        <Container className={classes.root} disableGutters>
            <Card className={classes.card}>
                <CardActionArea onClick={() => clickCheckout()}>
                    <CardMedia
                        className={classes.media}
                        image={getKeyValue<keyof IArtworksData["mockups"], IArtworksData["mockups"]>(perk.perk.type, perk.defaultArtwork.mockups) || perk.defaultArtwork.originalPicture}
                        title={perk.defaultArtwork.name + "'s " + perk.perk.name}
                    />
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {perk.perk.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.perkDescription}>
                        {perk.groupDescription
                            ? perk.groupDescription
                            : perk.perk.description}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => clickCheckout()} size="large" variant="contained" color="primary" disableElevation fullWidth className={classes.buyBtn}>
                        {"Support for " + (perk.perk.calcTotalPrice(perk.perk) - perk.perk.value.shipping) + " " + perk.perk.currencyCode}
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default PerkCard;