import React from "react"
import {StyledStartButton} from "./style/StyledStartButton";

const StartButton = ({callback}) => {
    return (
        <StyledStartButton
            id="main"
            onClick={callback}>
            Start Game
        </StyledStartButton>
    )
}

export default StartButton