import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import {Button} from "react-bootstrap";
import axios from "axios";

const MyModal = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [gamers, setGamers] = useState([])

    const getAllGamer = () => {
        axios.get("https://backforgame.herokuapp.com/app/getAllGamer")
            .then((response) => {
                const gamersFromBack = response.data
                setGamers(gamersFromBack)
            })
    }

    const mapUser = () => {
        gamers.map(gamer => console.log(gamer.score))
    }

    useEffect(() => {
        getAllGamer()
        mapUser()
    }, [getAllGamer])

    return (
        <div>

            <Button onClick={() => setModalIsOpen(true)} variant="outline-success">Cтатистика</Button>

            <Modal onRequestClose={() => setModalIsOpen(false)} isOpen={modalIsOpen}>
                <h2>Статистика</h2>

                <div>
                    {gamers.length > 0 ? (
                        <>
                            {gamers.map(gamer => (
                                <div>
                                    <div>{gamer.name} : {gamer.score}</div>
                                </div>
                            ))}
                        </>

                    ) : (
                        <h3>Игроки отсутствуют</h3>
                    )}
                </div>

            </Modal>
        </div>
    )
}

export default MyModal