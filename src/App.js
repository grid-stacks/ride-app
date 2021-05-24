import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import YourOffer from "./pages/YourOffer";
import SingleOffer from "./pages/SingleOffer";

const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Switch>
                <Route exact path="/" component={YourOffer} />
                <Route exact path="/:id" component={SingleOffer} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
