import React from 'react';

import { IArtworksData } from '../data/artworks';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { theme } from '../style/theming';
import { makeStyles, Grid } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    root: {
        boxShadow: 'none',
        borderRadius: 0,
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.125)',
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingRight: 0,
        width: '100%',
    },
    avatarArtwork: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    gridItemStart: {
        textAlign: "start",
    },
    avatarRoot: {
        display: "flex",
        alignItems: "center",
    }
});

export interface IArtworkButton {
    artwork: IArtworksData,
    handleClick: () => void,
}

const ArtworkButton: React.FC<IArtworkButton> = ({ artwork, handleClick }) => {
    const classes = useStyles();

    return (
        <ButtonBase
            focusRipple
            onClick={handleClick}
            key={artwork.name}
            className={classes.root}
        >
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item xs={8} className={classes.gridItemStart}>
                    <Typography variant="h5" component="h2">
                        {artwork.name}
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                        {"by " + artwork.artist.name}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                   
                            <Avatar alt={artwork.name + "'s original artwork"} variant={"square"} src={artwork.originalPicture} className={classes.avatarArtwork}/>
                        </Grid>
                        <Grid item xs={2}>
                            <KeyboardArrowRightIcon />
                        </Grid>
                    </Grid>

        </ButtonBase>
    );
}

export default ArtworkButton;