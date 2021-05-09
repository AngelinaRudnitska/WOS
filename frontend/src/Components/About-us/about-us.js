import React, { Fragment } from 'react'
import { Navbar, Form, Button } from "react-bootstrap";
import "./about-us.css";

const About_us = () => {
    return (
        <Fragment>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="title-area">
                            <h2>Our Services</h2>
                            <div className="separator separator-danger">✻</div>
                            <p className="titi">We have the best household appliances and many great accessories in our WOS shop. We are many years in the worlds household appliances platforms such as Amazone, Ebay, Rozetka and others.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="info-icon">
                                <div className="icon text-danger">
                                    <i className="fa fa-angellist"></i>
                                </div>
                                <h3>Sales</h3>
                                <p className="description">We make our goods perfect for you. And our sales are too good for us and our wealth.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-icon">
                                <div className="icon text-danger">
                                    <i className="fa fa-mobile"></i>
                                </div>
                                <h3>Mobiles</h3>
                                <p className="description">We have the best choice of the cellphones in the Universe and you are going to feel pleasure when you start to use them.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info-icon">
                                <div className="icon text-danger">
                                    <i className="fa fa-laptop"></i>
                                </div>
                                <h3>Computers</h3>
                                <p className="description">We like to present the world with our work, so we make sure that our goods are going to be best for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default About_us;