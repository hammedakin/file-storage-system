import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <section className="footer">
            <div className="pry text-center py-5">
                <div className="container py-5">
                    <h1 className="light-text fw-light">
                        Access your photos, videos and files on all your device
                    </h1>
                    <div className="my-3">
                        <Link to="/register">
                        <button className="btn light-btn mx-2">
                            <span className="h6">
                                Get Started
                            </span>
                        </button>
                        </Link>
                        <Link to="/pricing">
                        <button className="btn light-btn mx-2">
                            <span className="h6">
                                See pricing and plans
                            </span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <footer className="sec pt-5">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 mb-4 text-md-start text-center">
                            <img src={logo} alt="logo" width="20%" />
                        </div>
                        <div className="col-md-6 text-md-end text-center">
                           <Link to="/pricing">
                            <small className="fw-bold dark-text mx-2">
                                Pricing
                            </small>
                           </Link>
                           <Link to="/login">
                            <small className="fw-bold dark-text mx-2">
                                Sign In
                            </small>
                           </Link>
                           <Link to="/register">
                            <small className="fw-bold dark-text mx-2">
                                Sign Up
                            </small>
                           </Link>
                        </div>
                    </div>
                    <div className="footer-copyright py-4 text-center">
                        <small>
                            All rights reserved 2022
                        </small>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer;