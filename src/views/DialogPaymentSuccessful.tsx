import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid, Typography, Slide, Button } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";

const useStyles = makeStyles(theme => ({
    dialogTitle: {
        textAlign: "end",
        paddingBottom: 0,
    },
    dialogContent: {
        paddingBottom: theme.spacing(3),
    },
    BtnBackToCampaign: {
        marginTop: theme.spacing(2),
    }
}));

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export interface IDialogPaymentSuccessful {
    showDialog: boolean,
    closeDialog: () => void;
};

const DialogPaymentSuccessful: React.FC<IDialogPaymentSuccessful> = ({ showDialog, closeDialog }) => {
    const classes = useStyles();

    return (
        <Dialog onClose={() => closeDialog()} open={showDialog} TransitionComponent={Transition}>
            <DialogContent className={classes.dialogContent}>
                <Grid container
                    direction="column"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item>
                        <Typography variant="h2" component="h2" gutterBottom>
                            {"Thank You!"}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="p" gutterBottom align={"center"}>
                            {"Your payment was successful and you should receive a confirmation email shortly."}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button size="large" variant="contained" disableElevation color="primary" onClick={closeDialog} className={classes.BtnBackToCampaign}>{"Go Back To The Campaign"}</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>

    );
};

export default DialogPaymentSuccessful;