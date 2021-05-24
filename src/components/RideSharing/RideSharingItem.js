import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import React from "react";
import DriverDefaultImage from "./../../assets/images/driver-m.png";
import useStyles from "./styled";

const RideSharingItem = () => {
    const classes = useStyles();

    return (
        <Card className={classes.rideItem}>
            <CardContent className={classes.rideItemContent}>
                <Grid container justify="space-between" alignItems="stretch">
                    <Grid item md={5} sm={5} xs={12}>
                        <List className={classes.routeList}>
                            <ListItem className={classes.routeListItem}>
                                <Typography
                                    variant="h6"
                                    className={classes.rideTime}
                                >
                                    08:00
                                </Typography>
                                <ListItemText
                                    className={classes.routeListItemText}
                                >
                                    <Typography variant="h6">Agra</Typography>

                                    <Box>
                                        <DirectionsWalkIcon
                                            className={`${classes.routeWalkDistanceIcon} ${classes.routeWalkDistanceShort}`}
                                        />
                                        <DirectionsWalkIcon
                                            className={
                                                classes.routeWalkDistanceIcon
                                            }
                                        />
                                        <DirectionsWalkIcon
                                            className={
                                                classes.routeWalkDistanceIcon
                                            }
                                        />
                                    </Box>
                                </ListItemText>
                            </ListItem>
                            <ListItem className={classes.routeListItem}>
                                <Typography
                                    variant="h6"
                                    className={classes.rideTime}
                                >
                                    08:00
                                </Typography>
                                <ListItemText
                                    className={classes.routeListItemText}
                                >
                                    <Typography variant="h6">Agra</Typography>

                                    <Box>
                                        <DirectionsWalkIcon
                                            className={
                                                classes.routeWalkDistanceIcon
                                            }
                                        />
                                        <DirectionsWalkIcon
                                            className={`${classes.routeWalkDistanceIcon} ${classes.routeWalkDistanceMedium}`}
                                        />
                                        <DirectionsWalkIcon
                                            className={
                                                classes.routeWalkDistanceIcon
                                            }
                                        />
                                    </Box>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid
                        container
                        item
                        md={7}
                        sm={7}
                        xs={12}
                        justify="space-between"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item md={8} sm={8} xs={8}>
                            <Button
                                variant="outlined"
                                size="small"
                                color="primary"
                            >
                                Weather Info
                            </Button>
                        </Grid>
                        <Grid item md={4} sm={4} xs={4}>
                            <Typography
                                variant="body1"
                                className={classes.feeText}
                                align="right"
                            >
                                Rs. 15,000
                            </Typography>
                        </Grid>

                        <Grid item md={8} sm={8} xs={8}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={DriverDefaultImage}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="body1"
                                        className={classes.feeText}
                                    >
                                        Kenu
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={4} xs={4}>
                            <Box textAlign="right">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                >
                                    Contact
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default RideSharingItem;
