import React from 'react'
import {Link} from "react-router-dom";
import "./mainMenu-style.css"

const MainMenu = () => {

    const gamer = localStorage.getItem('gamer');

    return (
        <div id="gameMenu">
            {gamer === null ? (
                <div>
                    <div className="buttonToPlay">
                        <Link to="/game" className="btn btn-primary disabled" disabled>ИГРАТЬ</Link>
                    </div>
                    <div className="buttonToPlay">
                        <Link to="/createGamer" className="btn btn-dark">СОЗДАТЬ ИГРОКА</Link>
                    </div>
                </div>
            ) : (
                <div id="gameMenu">
                    <div className="buttonToPlay">
                        <Link to="/game" className="btn btn-primary">ИГРАТЬ</Link>
                    </div>
                    <div className="buttonToPlay">
                        <Link to="/createGamer" className="btn btn-dark disabled">СОЗДАТЬ ИГРОКА</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MainMenu