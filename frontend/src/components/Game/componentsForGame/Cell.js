import React from "react";
import {StyledCell} from "./style/StyledCell";
import {TETROMINOS} from "../tetrisFigure.js";

const Cell = ({type}) => {
    return (
        <StyledCell type={type} color={TETROMINOS[type].color}/>
    )
}

export default React.memo(Cell)