import React from "react";
import {Switch, Route} from "react-router-dom";
import CreateGamer from "./components/CreateGamer";
import Game from "./components/Game/Game";
import MainMenu from "./components/MainMenu";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/game" exact>
                <Game/>
            </Route>

            <Route path="/" exact>
                <MainMenu/>
            </Route>

            <Route path="/createGamer" exact>
                <CreateGamer/>
            </Route>

        </Switch>
    )
}