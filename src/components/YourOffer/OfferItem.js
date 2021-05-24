import {
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import useStyles from "./styled";

const OfferItem = ({ offer }) => {
    const history = useHistory();

    const classes = useStyles();

    return (
        <Card
            className={classes.rideItem}
            onClick={() => history.push(`/${offer.id}`)}
        >
            <CardContent className={classes.rideItemContent}>
                <Typography variant="h6" className={classes.rideItemTimeDate}>
                    {offer.time}
                </Typography>

                <List className={classes.routeList}>
                    <ListItem className={classes.routeListItem}>
                        <ListItemText className={classes.routeListItemText}>
                            {offer.from}
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.routeListItem}>
                        <ListItemText className={classes.routeListItemText}>
                            {offer.to}
                        </ListItemText>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default OfferItem;
