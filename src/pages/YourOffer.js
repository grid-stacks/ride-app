import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import OfferItem from "../components/YourOffer/OfferItem";
import useStyles from "./../components/YourOffer/styled";

const YourOffer = () => {
    const history = useHistory();
    const classes = useStyles();

    const [offers] = useState([
        { id: 1, time: "Thu, 3 Jun, 08:00", from: "Delhi", to: "Agra" },
        { id: 2, time: "Thu, 3 Jun, 08:00", from: "Pune", to: "Hydarabad" },
        { id: 3, time: "Thu, 3 Jun, 08:00", from: "Chennai", to: "Agra" },
    ]);

    return (
        <Box my={5}>
            <Typography variant="h4" className={classes.title}>
                Your rides
            </Typography>

            <Box textAlign="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/ride-sharing")}
                >
                    Ride Sharing
                </Button>
            </Box>

            <Box mt={5} px={1}>
                <Grid container justify="center">
                    <Grid item md={5} sm={6} xs={12}>
                        {offers && offers.length ? (
                            offers.map((offer, i) => (
                                <OfferItem key={i} offer={offer} />
                            ))
                        ) : (
                            <Typography variant="h6" className={classes.title}>
                                No offers
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default YourOffer;
