import React from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/phone.png'

const Showcase = () => {
    return (
        <section className="showcase sec">


            <div className="row align-items-end">
                <div className="col-md-7 first mb-5">
                    <div className="container">
                        <h3 className="my-4 fw-light display-4 pry-text ">
                            Secure and easy access to your files                        </h3>
                        <h1 className="fw-light">
                            Upload your files and access them, from anywhere in the world.
                        </h1>
                        <div className="mt-4">
                            <Link to="/register">
                                <button className="btn pry-btn border-2 pry-border mb-3 mx-1">
                                    <span className='h6 '>
                                        Create account
                                    </span>
                                </button>
                            </Link>
                            <Link to="/pricing">
                                <button className="btn pry-text border border-2 mb-3 mx-1">
                                    <span className='h6 '>
                                        See pricing and plans.
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 m-0 p-0">
                    <img src={img} alt="showcase" width='100%' className='' />
                </div>
            </div>
        </section>
    )
}

export default Showcase;