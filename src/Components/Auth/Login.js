import React, { useState } from 'react'
import Navbar from '../Homepage/Navbar'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Login = () => {

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
                Welcome back
              </h2>
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
                <input type="password"
                  className='input-style'
                  name='password'
                  placeholder='Password'
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-10 mx-auto">
                <div className="mb-4">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms" className='ms-2'>
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  className='btn w-100 pry-btn pry-border br-0 m-0'
                >
                  <span className="h6">
                    Sign In
                  </span>
                </button>
              </div>

            </form>
            <div className="col-md-10 mx-auto text-center">
              <div className="d-flex justify-content-between mt-3">
                <small className="">
                  Don't have an account? <Link to="/register">Sign up</Link>
                </small>
                <small className="">
                  <Link to="/forget-password">Forget Password</Link>
                </small>
              </div>
              <div className="mt-4 ">
                <hr className="border-3 border-dark" />
                <span className="or light-bg px-3">or</span>
              </div>

              <div
                className='py-2  w-100 sec dark-text br-0 m-0'
              >
                <span className="h6">
                  <i className='bi bi-google me-2 pry-text' />
                  Sign in with Google
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login