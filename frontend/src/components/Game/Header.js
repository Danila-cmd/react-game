import React, {useState} from 'react'
import {Navbar, Button, Form, Nav} from "react-bootstrap";
import MyModal from "./MyModal";

const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>React-Tetris</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <MyModal/>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header