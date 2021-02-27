import React, {useState} from "react";
import Stage from './Stage';
import Display from "./Display";
import StartButton from "./StartButton";
import {StyledTetris, StyledTetrisWrapper} from "./style/StyledTetris";

import {createStage, checkCollision} from "../gameHelpers";

import {useInterval} from "../hooks/useInterval";
import {usePlayer} from "../hooks/usePlayer";
import {useStage} from "../hooks/useStage";
import {useGameStatus} from "../hooks/useGameStatus";
import axios from "axios";

import {Link} from "react-scroll"

const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer)
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)
    const [scoreForBackEnd, setScoreForBackEnd] = useState(0)

    const movePlayer = dir => {
        if (!checkCollision(player, stage, {x: dir, y: 0})) {
            updatePlayerPos({x: dir, y: 0})
        }
    }

    const startGame = () => {
        setStage(createStage())
        setDropTime(1000);
        resetPlayer();
        setGameOver(false)
        setScore(0)
        setRows(0)
        setLevel(0)
        getGamer()
        blockScroll()
    }

    const blockScroll = () => {
        document.body.style.overflow = "hidden"
    }

    const unblockScroll = () => {
        document.body.style.overflow = ""
    }

    const drop = () => {

        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200)
        }

        if (!checkCollision(player, stage, {x: 0, y: 1})) {
            updatePlayerPos({x: 0, y: 1, collided: false})
        } else {
            if (player.pos.y < 1) {

                unblockScroll()

                const name = localStorage.getItem("gamer");

                const setGameOverScore = {
                    name,
                    score: scoreForBackEnd + score
                }

                axios.post("https://backforgame.herokuapp.com/app/addScore", setGameOverScore)
                    .then()

                setGameOver(true);
                setDropTime(null);

            }
            updatePlayerPos({x: 0, y: 0, collided: true})
        }
    }

    const keyUp = ({keyCode}) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000)
            }
        }
    }

    const dropPlayer = () => {
        setDropTime(null)
        drop()
    }

    const move = ({keyCode}) => {

        if (!gameOver) {
            if (keyCode === 37) {         // leftkey
                movePlayer(-1);
            } else if (keyCode === 39) {  // rightkey
                movePlayer(1)
            } else if (keyCode === 40) {  // downkey
                dropPlayer()
            } else if (keyCode === 38) {
                playerRotate(stage, 1)
            }
        }

    }

    useInterval(() => {
        drop();
    }, dropTime)

    const getGamer = () => {

        const nameGamer = localStorage.getItem("gamer")

        axios.get(`https://backforgame.herokuapp.com/app/getScore${nameGamer}`)
            .then((response) => {
                    const data = response.data.map(
                        map => {
                            setScoreForBackEnd(map.score)
                        })
                }
            )
            .catch(() => {
                console.log('Some error')
            })
    }

    return (
        <StyledTetrisWrapper onKeyUp={keyUp} role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over"/>
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`}/>
                            <Display text={`Rows: ${rows}`}/>
                            <Display text={`Level: ${level}`}/>
                        </div>
                    )}
                    <Link
                        activeClass="active"
                        to='main'
                        spy={true}
                        smooth={-70}
                        duration={500}
                    >
                        <StartButton callback={startGame}/>
                    </Link>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris