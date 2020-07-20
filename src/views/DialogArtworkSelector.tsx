import React, { Dispatch, SetStateAction } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import { Grid, Typography, Slide, Container } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { IArtworksData } from "../data/artworks";
import ArtworkButton from "../controls/ArtworkButton";

const useStyles = makeStyles(theme => ({
    root: {

    },
}));

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export interface IDialogArtworkSelector {
    artworks: IArtworksData[],
    setSelectedArtwork: Dispatch<SetStateAction<IArtworksData>>,
    showSelector: boolean,
    setShowSelector: Dispatch<SetStateAction<boolean>>,
};

const DialogArtworkSelector: React.FC<IDialogArtworkSelector> = ({ artworks, setSelectedArtwork, showSelector, setShowSelector }) => {
    const classes = useStyles();

    const handleArtworkSelection = (artwork: IArtworksData) => {
        setSelectedArtwork(artwork);
        setShowSelector(false);
    };

    return (
        <Dialog onClose={() => setShowSelector(false)} open={showSelector} TransitionComponent={Transition} fullScreen className={classes.root}>
            <DialogTitle disableTypography>
                <Container disableGutters>
                    <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center">
                        <Grid item xs={11}>
                            <Typography variant="h4" component="h2">
                                {"Select"}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton aria-label="close" onClick={() => setShowSelector(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </DialogTitle>
            <DialogContent dividers>
                <Grid container
                    direction="row"
                    spacing={1}>
                    {artworks.map((artwork) => {
                        return (
                            <Grid item xs={12} md={6} lg={4}>
                                <ArtworkButton artwork={artwork} handleClick={() => handleArtworkSelection(artwork)} />
                            </Grid>
                        );
                    })}
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default DialogArtworkSelector;