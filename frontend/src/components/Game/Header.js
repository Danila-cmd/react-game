import React from 'react'
import {Navbar, Form, Nav} from "react-bootstrap";

const Header = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>React-Tetris</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <div>Model</div>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header