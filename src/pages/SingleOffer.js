import React from "react";
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
} from "@material-ui/core";
import useStyles from "./../components/SingleOffer/styled";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const SingleOffer = () => {
    const classes = useStyles();
    return (
        <Box my={5}>
            <Typography variant="h4" className={classes.title}>
                Ride Plan
            </Typography>

            <Box mt={5} px={1}>
                <Grid container justify="center">
                    <Grid item md={5} sm={6} xs={12}>
                        <Typography
                            variant="h6"
                            className={classes.rideItemTimeDate}
                        >
                            Thu, 3 Jun
                        </Typography>

                        <List className={classes.routeList}>
                            <ListItem className={classes.routeListItem}>
                                <ListItemText
                                    className={classes.routeListItemText}
                                >
                                    <Typography variant="h6">Agra</Typography>
                                    <Typography variant="body2">
                                        Agra, Uttar Pradesh
                                    </Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon
                                    className={classes.arrowIcon}
                                    fontSize="small"
                                />
                            </ListItem>
                            <ListItem className={classes.routeListItem}>
                                <ListItemText
                                    className={classes.routeListItemText}
                                >
                                    <Typography variant="h6">Agra</Typography>
                                    <Typography variant="body2">
                                        Agra, Uttar Pradesh
                                    </Typography>
                                </ListItemText>
                                <ArrowForwardIosIcon
                                    className={classes.arrowIcon}
                                    fontSize="small"
                                />
                            </ListItem>
                        </List>

                        <Divider />
                        <Box py={3}>
                            <Typography
                                variant="body2"
                                className={classes.passengerText}
                            >
                                No passengers for this ride
                            </Typography>
                        </Box>

                        <Divider />

                        <Box>
                            <List className={classes.publicationList}>
                                <ListItem
                                    className={classes.publicationListItem}
                                >
                                    <ListItemText
                                        className={
                                            classes.publicationListItemText
                                        }
                                    >
                                        Your Publication
                                    </ListItemText>
                                    <ArrowForwardIosIcon
                                        className={classes.arrowIcon}
                                        fontSize="small"
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default SingleOffer;
