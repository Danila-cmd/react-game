import React from "react";
import Tetris from './componentsForGame/Tetris'
import "./index.css"
import Header from "./Header";
import Footer from "./Footer";

const Game = () => {
    return (
        <div>
            <Header/>
            <Tetris/>
            <Footer/>
        </div>
    )
}

export default Game;