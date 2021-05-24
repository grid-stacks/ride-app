import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import ReactLoading from "react-loading";

const useStyles = makeStyles({
    wrapper: {
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
    },
});

const SuspenseLoading = () => {
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>
            <ReactLoading
                type="spin"
                color="#054752"
                height="20%"
                width="20%"
            />
        </Box>
    );
};

export default SuspenseLoading;
