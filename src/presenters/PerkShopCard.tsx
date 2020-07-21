import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import { IArtworksData } from "../data/artworks";
import Chip from "@material-ui/core/Chip";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { theme } from "../style/theming";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { IPerkCampaign } from "../data/campaign";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {

    },
    chipPerkName: {
        borderRadius: 0,
    },
    card: {
        // maxidth: 345,
        boxShadow: 'none',
        borderRadius: 0,
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.125)',
    },
    media: {
        height: 0,
        paddingTop: '100%',
    },
    title: {
        textTransform: "capitalize",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

    containerCollapseInfo: {
        marginBottom: theme.spacing(2),
    },
    cardContentCollapseInfo: {
        paddingTop: 0,
    },
    btnLearnMore: {
        borderRadius: 0,
        justifyContent: "start",
        textAlign: "start",
        '&:hover': {
            background: "none",
        }
    },
    btnShowLess: {
        borderRadius: 0,
        marginTop: theme.spacing(2),
    },
    artworkLink: {
        boxShadow: 'none',
        borderRadius: 0,
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.125)',
        textTransform: "none",
    }
});

export interface IPerkShopCard {
    perkCampaign: IPerkCampaign,
    artwork: IArtworksData,
}

const PerkShopCard: React.FC<IPerkShopCard> = ({ perkCampaign, artwork }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    let perk = perkCampaign.perk;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const extractArtistsName = (perkCampaign: IPerkCampaign) => {
        // Extract all the name of the artists
        let artists: string[] = perkCampaign.artworks.map((artwork) => (artwork.artist.name));

        // Initialize an empty array to avoid having the type never
        let emptyArray: string[] = [];
        // Remove duplicates of artists
        let uniqArtists = artists.reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, emptyArray);

        return uniqArtists.join(', ');
    }

    // To get the right mockup according to the perk type
    const getKeyValue = <U extends keyof T, T extends object>(
        key: U,
        obj: T
    ) => obj[key]

    return (
        <Container className={classes.root} disableGutters>
            <Card className={classes.card}>
                <CardActionArea onClick={handleExpandClick}>
                    <CardContent>
                        {perk.groupArtworks
                            ? null
                            : <Chip size="small" label={perk.name} className={classes.chipPerkName} />
                        }
                        <Typography variant="h5" component="h2">
                            {perk.groupArtworks
                                ? perk.name
                                : artwork.name
                            }
                        </Typography>
                        <Typography variant="subtitle2" component="p">
                            {"by "}
                            {perk.groupArtworks
                                ? extractArtistsName(perkCampaign)
                                : artwork.artist.name
                            }
                        </Typography>
                    </CardContent>
                    <CardMedia
                        className={classes.media}
                        image={getKeyValue<keyof IArtworksData["mockups"], IArtworksData["mockups"]>(perk.type, artwork.mockups) || artwork.originalPicture}
                        title={artwork.name + "'s " + perk.name}
                    />
                </CardActionArea>
                <CardActions disableSpacing>
                    <Button size="small" onClick={handleExpandClick} fullWidth disableRipple className={classes.btnLearnMore}>Learn More</Button>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.cardContentCollapseInfo}>
                        <CardActionArea onClick={handleExpandClick}>
                            <Container className={classes.containerCollapseInfo} disableGutters>
                                <Typography variant="body1" component="p">
                                    {perk.groupArtworks && perkCampaign.groupDescription
                                        ? perkCampaign.groupDescription
                                        : artwork.description
                                    }
                                </Typography>
                            </Container>
                        </CardActionArea>
                        <Grid container spacing={2}>
                            {perk.groupArtworks
                                ? null
                                : (artwork.listLinks === undefined) ? null : artwork.listLinks.map((link) => {
                                    return (
                                    <Grid item xs={12} md={6}>
                                        <Button href={link.url} target="_blank" rel="noreferrer" className={classes.artworkLink} fullWidth>
                                            {link.name}
                                        </Button>
                                    </Grid>);
                                })
                            }
                        </Grid>
                        <Button size="small" onClick={handleExpandClick} className={classes.btnShowLess} fullWidth>Show Less</Button>
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
};

export default PerkShopCard;