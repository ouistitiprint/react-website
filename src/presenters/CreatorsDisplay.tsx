import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { IArtistsData } from "../data/artists";
import CreatorCard from "./CreatorCard";

const useStyles = makeStyles(theme => ({
    root: {
// 
    },
}));

export interface ICreatorDisplay {
    artists: IArtistsData[],
};

const CreatorDisplay: React.FC<ICreatorDisplay> = ({ artists }) => { 
    const classes = useStyles();

    return (
        <Grid container className={classes.root} 
            direction="row"
            justify="flex-start"
            alignItems="flex-start" spacing={2}>
        {artists.map((artist) => {
            return (
                <Grid item xs={12} sm={4}>
                    <CreatorCard artist={artist}/>
                </Grid>
            );
        })}
        </Grid>
    );
};


export default CreatorDisplay;
