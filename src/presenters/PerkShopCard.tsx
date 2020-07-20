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
import { IPerkData } from "../data/perks";

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
        marginBottom: theme.spacing(1),
    },
    cardContentCollapseInfo: {
        paddingTop: 0,
    }
});

export interface IPerkShopCard {
    perk: IPerkData,
    artwork: IArtworksData,
}

const PerkShopCard: React.FC<IPerkShopCard> = ({ perk, artwork }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // To get the right mockup according to the perk type
    const getKeyValue = <U extends keyof T, T extends object>(
        key: U,
        obj: T
    ) => obj[key]

    return (
        <Container className={classes.root} disableGutters>
            <Card className={classes.card}>
                <CardContent>
                    <Chip size="small" label={perk.name} className={classes.chipPerkName} />
                    <Typography variant="h5" component="h2">
                        {artwork.name}
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                        {"by " + artwork.artist.name}
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image={getKeyValue<keyof IArtworksData["mockups"], IArtworksData["mockups"]>(perk.type, artwork.mockups) || artwork.originalPicture}
                    title={artwork.name + "'s " + perk.name}
                />
                <CardActions disableSpacing>
                    <Button size="small" onClick={handleExpandClick}>Learn More</Button>
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
                        <Container className={classes.containerCollapseInfo} disableGutters>
                    <Typography variant="body1" component="p">
                        {artwork.description}
                    </Typography>
                    </Container>
                    <Button size="small" onClick={handleExpandClick} fullWidth>Show Less</Button>
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
};

export default PerkShopCard;