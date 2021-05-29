import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    rightPanel: {
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: "9999",
        width: "25%",
        height: "100%",
        backgroundColor: "#ffffff",
        overflow: "auto",
    },
});
