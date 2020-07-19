import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { IPerkCampaign } from "../data/campaign";
import { IPerkData } from "../data/perks";
import { Grid, Typography, TableContainer, Table, Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
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
    tableSummary: {
        textTransform: "capitalize",
    },
    totalCell: {
        fontWeight: "bold",
    }
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
    ) => obj[key];

    function createData(name: string, price: number) {
        return { name, price };
      };

    function createSummary (perk: IPerkData) : {name: string, price: number}[] {
        let keys: string[] = Object.keys(perk.value);
        let prices: number[] = Object.values(perk.value);
        
        // return keys.map((item, i) => Object.assign({}, item, values[i]));
        return keys.map((item, i) => createData(item, prices[i]));
    }

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
                                {perk.perk.calcTotalPrice(perk.perk) + perk.perk.currencyCode}
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
                    <TableContainer component={Paper}>
                        <Table className={classes.tableSummary} size="small" aria-label="Order summary">
                            <TableBody>
                            {createSummary(perk.perk).map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.price + perk.perk.currencyCode}</TableCell>
                                </TableRow>
                            ))}
                             <TableRow key={"total"}>
                                <TableCell component="th" scope="row" className={classes.totalCell}>
                                    {"total"}
                                </TableCell>
                                <TableCell align="right" className={classes.totalCell}>{perk.perk.calcTotalPrice(perk.perk) + perk.perk.currencyCode}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        </TableContainer>
                    <StripeCheckoutBtn priceApiId={getKeyValue<keyof IArtworksData["api"], IArtworksData["api"]>(perk.perk.type, perk.defaultArtwork.api) || ""}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PerkShop;