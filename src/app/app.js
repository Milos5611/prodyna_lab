import "./index.scss";
import * as ROUTES from "../app/common/routes";
import {Route, Router, Switch} from "react-router-dom";
import HomePage from "./container/HomePage";
import {Provider} from "react-redux";
import React from "react";
import RestoranDetail from "./container/RestoranDetail";
import customHistory from "./common/history";
import domready from "domready";
import {render} from "react-dom";
import store from "./common/store";

const MainApplication = () => {
    return (
        <Provider store={store}>
            <Router history={customHistory}>
                <div>
                    <Switch>
                        <Route
                            exact
                            path={ROUTES.HOME}
                            component={HomePage}
                        />
                        <Route
                            exact
                            path={ROUTES.RESTORAN}
                            component={RestoranDetail}
                        />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

domready(() => {
    render(
        <MainApplication/>, document.getElementById("app"));
});
