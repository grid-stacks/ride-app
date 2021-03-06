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
        padding: "8px 15px",
    },
    rideItemTimeDate: {
        fontWeight: "bold",
        color: "#054752",
    },
    routeList: {
        position: "relative",
        "&::after": {
            content: "''",
            width: "4px",
            height: "50%",
            backgroundColor: "#054752",
            position: "absolute",
            top: "50%",
            left: 63,
            transform: "translateY(-50%)",
        },
    },
    routeListItem: {
        padding: "2px 16px",
        paddingLeft: "75px",
        position: "relative",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#F1F1F1",
        },
        "&::before": {
            content: "''",
            width: "10px",
            height: "10px",
            backgroundColor: "#ffffff",
            border: "2px solid #054752",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: 60,
            transform: "translateY(-50%)",
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
        "& .MuiTypography-root": {
            fontWeight: 600,
            color: "#054752",
        },
    },
    arrowIcon: {
        fontSize: 16,
        color: "#708C91",
    },
    passengerText: {
        fontWeight: 600,
        color: "#708c91",
    },
    publicationList: {},
    publicationListItem: {
        width: "100%",
        padding: "10px 16px",
        position: "relative",
        cursor: "pointer",
        "&:hover": {
            width: "100%",
            backgroundColor: "#F1F1F1",
        },
    },
    publicationListItemText: {
        "& .MuiTypography-root": {
            fontWeight: 600,
            color: "#054752",
            fontSize: 18,
        },
    },
}));

export default useStyles;
