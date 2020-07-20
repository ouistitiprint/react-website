import React, { useState, ReactComponentElement } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { IPerkCampaign, IFoundationData } from "../data/campaign";
import { IPerkData } from "../data/perks";
import { Grid, Typography, TableContainer, Table, Paper, TableBody, TableCell, TableRow, Card, CardMedia, Chip, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import Image from "material-ui-image";
import { IArtworksData } from "../data/artworks";
import StripeCheckoutBtn from "../payments/StripeCheckoutBtn";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { theme } from "../style/theming";
import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';
import PerkShopCard from "./PerkShopCard";
import ArtworkButton from "../controls/ArtworkButton";

const useStyles = makeStyles({
    alertDonation: {
        color: "#ffffff",
        backgroundColor: "#000000",
        alignItems: "center",
    },
    gridShop: {
        marginTop: theme.spacing(1),
    },
    chipPerkName: {
        borderRadius: 0,
    },
    perkName: {

    },
    perkPrice: {

    },
    perkDescription: {

    },
    perkSummaryTitle: {

    },
    tableContainer: {
        boxShadow: 'none',
        borderRadius: 0,
        border: '0px solid',
    },
    tableSummary: {
        textTransform: "capitalize",
    },
    totalCell: {
        fontWeight: "bold",
    },
    freeChip: {
        marginLeft: theme.spacing(1),
    },
    donationChip: {
        color: "#ffffff",
        backgroundColor: "#000000",
        marginRight: -8,
    },
    img: {
        width: '300',
    }
});

export interface IPerkShop {
    perk: IPerkCampaign,
    foundation: IFoundationData,
}

const PerkShop: React.FC<IPerkShop> = ({ perk, foundation }) => {
    const classes = useStyles();

    const [selectedArtwork, setSelectedArtwork] = useState(perk.defaultArtwork);
    // Control the expand of the artwork.
    const [expanded, setExpanded] = useState(false);

    // To get the right mockup according to the perk type
    const getKeyValue = <U extends keyof T, T extends object>(
        key: U,
        obj: T
    ) => obj[key];

    function createData(name: string, price: number) {
        return { name, price };
    };

    function createSummary(perk: IPerkData): { name: string, price: number }[] {
        let keys: string[] = Object.keys(perk.value);
        keys.forEach(function (item, i) { if (item == "product") keys[i] = perk.name; });
        let prices: number[] = Object.values(perk.value);

        // return keys.map((item, i) => Object.assign({}, item, values[i]));
        return keys.map((item, i) => createData(item, prices[i]));
    }

    const handleClick = () => {
        console.log("You clicked a PerkCard");
    };

    const handleChange = (expanded: boolean) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(expanded);
    };



    return (
        <Container disableGutters>
            <Alert icon={"✊"} severity="success" className={classes.alertDonation}>
                {"Give " + perk.perk.value.donation + " " + perk.perk.currencyCode + " to " + foundation.name + " with your purchase!"}
            </Alert>
            <Grid container className={classes.gridShop} justify="space-between" spacing={3}>
                <Grid item xs={12} md={8}>
                    <PerkShopCard perk={perk.perk} artwork={selectedArtwork} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container
                        direction="column"
                        justify="flex-start"
                        alignItems="stretch"
                        spacing={3}>
                            {/* Display or not the Artwork Selector */}
                        {perk.perk.groupArtworks
                            ? null
                            : <Grid item>
                                <Typography variant="h6" component="h3" className={classes.perkSummaryTitle} gutterBottom>
                                    {"Choose Artwork"}
                                </Typography>

                                <ArtworkButton artwork={selectedArtwork} handleClick={handleClick} />
                            </Grid>}

                        <Grid item>
                            <Typography variant="h6" component="h3" className={classes.perkSummaryTitle} gutterBottom>
                                {"Summary"}
                            </Typography>

                            <TableContainer component={Paper} className={classes.tableContainer}>
                                <Table className={classes.tableSummary} size="small" aria-label="Order summary">
                                    <TableBody>
                                        {createSummary(perk.perk).map((row) => {
                                            if (row.price <= 0) {
                                                return (
                                                    <TableRow key={row.name}>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                            <Chip size="small" label={"Free"} className={classes.freeChip} />
                                                        </TableCell>
                                                        <TableCell align="right">{row.price + perk.perk.currencyCode}</TableCell>
                                                    </TableRow>
                                                );
                                            } else if (row.name === "donation") {
                                                return (
                                                    <TableRow key={row.name}>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <Chip size="small" label={"✊ " + row.price + perk.perk.currencyCode} className={classes.donationChip} />

                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            } else {
                                                return (
                                                    <TableRow key={row.name}>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">{row.price + perk.perk.currencyCode}</TableCell>
                                                    </TableRow>
                                                );
                                            }

                                        })}
                                        <TableRow key={"total"}>
                                            <TableCell component="th" scope="row" className={classes.totalCell}>
                                                {"total"}
                                            </TableCell>
                                            <TableCell align="right" className={classes.totalCell}>{perk.perk.calcTotalPrice(perk.perk) + perk.perk.currencyCode}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>
                        <Grid item>
                            <StripeCheckoutBtn priceApiId={getKeyValue<keyof IArtworksData["api"], IArtworksData["api"]>(perk.perk.type, perk.defaultArtwork.api) || ""} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PerkShop;