import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid, Typography, Slide, Button, Link } from "@material-ui/core";
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

export interface IDialogPaymentCanceled {
    showDialog: boolean,
    closeDialog: () => void;
};

const DialogPaymentCanceled: React.FC<IDialogPaymentCanceled> = ({ showDialog, closeDialog }) => {
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
                            {"Oh No!"}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" component="p" gutterBottom align={"center"}>
                            {"Your payment was canceled. Please try again. If the problem persists, don't hesitate to "}
                            <Link href={"mailto:contact@vueng.ch"} color="inherit" underline={"always"}>
                                {"contact us"}
                            </Link>
                            {"."}
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

export default DialogPaymentCanceled;