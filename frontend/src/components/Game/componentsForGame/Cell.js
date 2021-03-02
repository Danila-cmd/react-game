import React from "react";
import {CellStyled} from "./style/CellStyled";
import {TETROMINOS} from "../tetrisFigure.js";

const Cell = ({type}) => {
    return (
        <CellStyled type={type} color={TETROMINOS[type].color}/>
    )
}

export default React.memo(Cell)