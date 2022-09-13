import React, { useState } from 'react'
import Navbar from '../Homepage/Navbar'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const ForgetPassword = () => {

  // Form Fields
  const [formField, setformField] = useState({});
  function handleChange(e) {
    setformField((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  }
  // Form Fields

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }


  return (
    <main>
      <Navbar />
      <section className="auth sec py-5 min-height-lg">
        <div className="col-md-7 light-bg border border-2 py-5  mx-auto">
          <div className="container">

            <div className="text-center mb-5">
              <img src={logo} alt="logo" width="15%" />
              <h2 className="my-3">
                Forget Password
              </h2>
              <h5 className="col-md-10 mx-auto">
                Enter your email address to reset your password.
                You may need to check your spam folder.
              </h5>
            </div>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="col-md-10 mx-auto">
                <input type="email"
                  className='input-style'
                  name='email'
                  placeholder='Email'
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-10 mx-auto">

                <button
                  type="submit"
                  className='btn w-100 pry-btn pry-border br-0 m-0'
                >
                  <span className="h6">
                    Continue
                  </span>
                </button>
              </div>

            </form>
            <div className="col-md-10 mx-auto text-center mt-3">
              <Link to="/login" className="btn">
              <span className="h6">
                <i className='bi bi-arrow-left me-2 ' />
                Back to Sign in
              </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ForgetPassword