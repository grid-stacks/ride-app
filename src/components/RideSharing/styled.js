import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#054752",
        [theme.breakpoints.down("xs")]: {
            textAlign: "left",
        },
    },
    rideItem: {
        borderRadius: "16px",
        boxShadow: "rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt",
        marginBottom: 10,
        userSelect: "none",
        cursor: "pointer",

        "&:last-child": {
            marginBottom: 0,
        },
    },
    rideItemContent: {
        padding: "10px 15px !important",
    },
    routeWalkDistance: {},
    routeWalkDistanceIcon: {
        fontSize: 20,
        backgroundColor: "#EDEDED",
        color: "#FFFFFF",
        padding: 2,
        borderRadius: "50%",
        marginRight: 3,
        "&:last-child": {
            marginRight: 0,
        },
    },
    routeWalkDistanceShort: {
        backgroundColor: "#5DD167",
    },
    routeWalkDistanceMedium: {
        backgroundColor: "#FFCA0C",
    },
    routeWalkDistanceLong: {
        backgroundColor: "#F78B00",
    },
    routeList: {
        position: "relative",
        padding: 0,
        "&::after": {
            content: "''",
            width: "4px",
            height: "50%",
            backgroundColor: "#054752",
            position: "absolute",
            top: "50%",
            left: 63,
            transform: "translateY(-62%)",
        },
    },
    routeListItem: {
        padding: "2px 16px",
        paddingLeft: "75px",
        position: "relative",
        cursor: "pointer",
        "&::before": {
            content: "''",
            width: "10px",
            height: "10px",
            backgroundColor: "#ffffff",
            border: "2px solid #054752",
            borderRadius: "50%",
            position: "absolute",
            top: "35%",
            left: 60,
            transform: "translateY(-35%)",
            zIndex: 99,
        },
    },
    rideTime: {
        fontWeight: "bold",
        color: "#054752",
        position: "absolute",
        top: 6,
        left: 0,
    },
    routeListItemText: {
        margin: 0,
        "& .MuiTypography-root": {
            fontWeight: 600,
            color: "#054752",
        },
    },
    feeText: {
        fontWeight: 600,
        color: "#054752",
    },
}));

export default useStyles;
