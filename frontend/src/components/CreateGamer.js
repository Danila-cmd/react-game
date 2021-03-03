import React, {useState} from 'react'
import axios from "axios";
import "./CreateGamer.css"
import {Link} from "react-router-dom";

const CreateGamer = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const changeName = (e) => {
        setName(e.target.value)
        e.preventDefault()
    }

    const changeEmail = (e) => {

        setEmail(e.target.value)

        e.preventDefault()
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        const gamer = {
            name,
            email
        }

        axios.post('https://backforgame.herokuapp.com/app/signup', gamer)
            .then(response => console.log(response.data))

        setName('')
        setEmail('')

        localStorage.setItem("gamer", name);

    }

    return (
        <div className="createGamer">
            <div className="row">
                <div className='col s4 offset-s3'>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                               placeholder="Введите имя игрока"
                               value={name}
                               onChange={changeName}
                               className='form-control form-group'/>

                        <input type="text"
                               placeholder="Введите почту"
                               value={email}
                               onChange={changeEmail}
                               className='form-control form-group'/>

                        <input type="submit" className='btn btn-danger btn-block mb-2'
                               value='Создать игрока'/>

                        <Link to="/"
                              className="btn btn-primary btn-block">
                            Назад
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateGamer