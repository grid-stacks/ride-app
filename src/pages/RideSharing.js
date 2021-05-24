import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import RideSharingItem from "../components/RideSharing/RideSharingItem";
import useStyles from "./../components/RideSharing/styled";

const RideSharing = () => {
    const classes = useStyles();
    return (
        <Box my={5} px={2}>
            <Typography variant="h4" className={classes.title}>
                Ride Sharing
            </Typography>

            <Box mt={5} px={1}>
                <Grid container justify="center">
                    <Grid item md={6} sm={8} xs={12}>
                        <RideSharingItem />
                        <RideSharingItem />
                        <RideSharingItem />
                        <RideSharingItem />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default RideSharing;
