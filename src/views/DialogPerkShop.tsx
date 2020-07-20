import React, { Dispatch, SetStateAction } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { IPerkCampaign, IFoundationData } from "../data/campaign";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import PerkShop from "../presenters/PerkShop";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import { Grid, Typography, Slide, Container } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";

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

export interface IDialogPerkShop {
    perk: IPerkCampaign,
    foundation: IFoundationData,
    showShop: boolean,
    setShowShop: Dispatch<SetStateAction<boolean>>;
};

const DialogPerkShop: React.FC<IDialogPerkShop> = ({ perk, foundation, showShop, setShowShop }) => {
    const classes = useStyles();

    return (
        <Dialog onClose={() => setShowShop(false)} open={showShop} TransitionComponent={Transition} fullScreen className={classes.root}>
            <DialogTitle disableTypography>
                <Container disableGutters>
                    <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center">
                        <Grid item xs={11}>
                            <Typography variant="h4" component="h2">
                                {"Checkout"}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton aria-label="close" onClick={() => setShowShop(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </DialogTitle>
            <DialogContent dividers>
                <PerkShop perk={perk} foundation={foundation} />
            </DialogContent>
        </Dialog>
    );
};

export default DialogPerkShop;