import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { IPerkCampaign } from "../data/campaign";
import { Grid, Typography } from "@material-ui/core";
import Image from "material-ui-image";
import { IArtworksData } from "../data/artworks";
import StripeCheckoutBtn from "../payments/StripeCheckoutBtn";

const useStyles = makeStyles({
    root: {

    },
    gridShop: {

    },
    perkName: {

    },
    perkPrice: {

    },
    perkDescription: {

    },
    perkSummaryTitle: {

    },
});

export interface IPerkShop {
    perk: IPerkCampaign,
}

const PerkShop: React.FC<IPerkShop> = ({ perk }) => {
    const classes = useStyles();

    // To get the right mockup according to the perk type
    const getKeyValue = <U extends keyof T, T extends object>(
        key: U,
        obj: T
    ) => obj[key]

    return (
        <Container className={classes.root} disableGutters>
            <Grid container className={classes.gridShop}>
                <Grid item xs={12} sm={8} >
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography variant="h5" component="h2" className={classes.perkName}>
                                {perk.perk.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h4" component="h2" className={classes.perkPrice}>
                                {perk.perk.price + '$'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="body1" component="p" className={classes.perkDescription}>
                        {perk.perk.description}
                    </Typography>
                    <Image
                        src={getKeyValue<keyof IArtworksData["mockups"], IArtworksData["mockups"]>(perk.perk.type, perk.defaultArtwork.mockups) || perk.defaultArtwork.originalPicture}
                        disableSpinner />

                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" component="h3" className={classes.perkSummaryTitle}>
                        {"Summary"}
                    </Typography>
                    <StripeCheckoutBtn priceApiId={getKeyValue<keyof IArtworksData["api"], IArtworksData["api"]>(perk.perk.type, perk.defaultArtwork.api) || ""}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PerkShop;