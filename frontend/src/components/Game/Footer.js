import React from 'react'
import "./Footer.css"
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";

const Footer = () => {
    return (
        <div className="flex-container">

            <div>
                <a href="">
                    <img className="resize" src="https://rs.school/images/rs_school_js.svg" alt="rs school"/>
                </a>
            </div>

            <div>
                <a href="">GitHub</a>
            </div>

            <div>
                &copy; {new Date().getFullYear()}
            </div>

        </div>
    );
}

export default Footer
