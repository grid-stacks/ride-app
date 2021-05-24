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
            left: 3,
            transform: "translateY(-50%)",
        },
    },
    routeListItem: {
        padding: "0 16px",
        position: "relative",
        "&::before": {
            content: "''",
            width: "10px",
            height: "10px",
            backgroundColor: "#ffffff",
            border: "2px solid #054752",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 99,
        },
    },
    routeListItemText: {
        "& .MuiTypography-root": {
            fontWeight: 600,
            color: "#054752",
            fontSize: 18,
        },
    },
}));

export default useStyles;
