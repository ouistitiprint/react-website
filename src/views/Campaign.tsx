import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
}));

interface ICampaign {};

const Campaign: React.FC<ICampaign> = () => { 
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Success
        </div>
    );
};


export default Campaign;
