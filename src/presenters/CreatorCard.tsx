import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import * as colors from "../style/colors";

import { IArtistsData } from "../data/artists";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import Pinterest from '@material-ui/icons/Pinterest';

// Size of the image in em
const imgSize: number = 5;

// how much the image should be out
// of the card in percentage
const imgOverflow: number = 0.5;

const useStyles = makeStyles({
    container: {
        paddingTop: (imgSize * imgOverflow).toString() + 'em',
        margin: 0,
    },
    card: {
        maxWidth: 345,
        boxShadow: 'none',
        borderRadius: 0,
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.125)',
        overflow: 'initial',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cardMedia: {
        paddingBottom: imgSize.toString() + 'em',
        width: imgSize.toString() + 'em',
        borderRadius: '50%',
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: (-1 * imgSize * imgOverflow).toString() + 'em',
    },
    content: {
        paddingBottom: 0,
    },
    socialBtn: {
        '&:hover': {
            background: colors.blmYellow,
        }
    }
});

export interface ICreatorCard {
    artist: IArtistsData,
}

const CreatorCard: React.FC<ICreatorCard> = ({ artist }) => {
    const classes = useStyles();

    return (
        <Container className={classes.container} disableGutters>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={artist.picture}
                    title={artist.name + "'s Picture"}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h6" component="h2" align="center">
                        {artist.name}
                    </Typography>
                    <Typography variant="body1" component="p" align="center">
                        {artist.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {artist.listSocial.map((media) => {
                        if (media.name === 'instagram') {
                            return (
                                <IconButton aria-label={artist.name + "'s " + media.name} className={classes.socialBtn} target="_blank" href={media.url}>
                                    <Instagram fontSize="inherit" />
                                </IconButton>);
                        } else if(media.name === 'pinterest') {
                            return (
                                <IconButton aria-label={artist.name + "'s " + media.name} className={classes.socialBtn} target="_blank" href={media.url}>
                                    <Pinterest fontSize="inherit" />
                                </IconButton>);
                        } else if(media.name === 'facebook') {
                            return (
                                <IconButton aria-label={artist.name + "'s " + media.name} className={classes.socialBtn} target="_blank" href={media.url}>
                                    <Facebook fontSize="inherit" />
                                </IconButton>);
                        } else {
                            return (null);
                        }
                    })}
                </CardActions>
            </Card>
        </Container>
    );
};

export default CreatorCard;