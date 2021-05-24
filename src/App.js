import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import YourOffer from "./pages/YourOffer";
import SingleOffer from "./pages/SingleOffer";
import RideSharing from "./pages/RideSharing";

const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Switch>
                <Route exact path="/" component={YourOffer} />
                <Route exact path="/offer/:id" component={SingleOffer} />
                <Route exact path="/ride-sharing" component={RideSharing} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
