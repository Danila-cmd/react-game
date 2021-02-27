import React from 'react'
import "./Footer.css"
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";

const Footer = () => {
    return (
        <div className="flex-container">

            <div>
                <a href="https://rs.school/js/">
                    <img className="resize" src="https://rs.school/images/rs_school_js.svg" alt="rs school"/>
                </a>
            </div>

            <div>
                <a href="https://github.com/Danila-cmd">GitHub</a>
            </div>

            <div>
                &copy; {new Date().getFullYear()}
            </div>

        </div>
    );
}

export default Footer
