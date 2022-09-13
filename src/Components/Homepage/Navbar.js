import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import img from '../assets/logo.svg'


const Navbar = () => {
  let navLink = [
    { title: "Pricing", to: "/pricing" },
    { title: "Language", to: "#" },
  ];
  let BtnLink = [
    { title: "Sign In", to: "/login", style: " light-btn border" },
    { title: "Sign Up", to: "/register", style: " pry-btn " },
  ];


  return (
    <>

      <div className="homenav">
        <nav className="navbar shadow-none navbar-expand-lg light-bg " id="navbar">
          <div className="container">
            <Link to="/" className="navbar-brand mt-2 mb-3 pry-text">
              <img src={img} width="60%" alt="logo" loading="lazy" />

            </Link>

            <a
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon toggler">
                <i className="bi bi-list h3 pry-text " />
              </span>
            </a>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto text-center align-items-center">
                {navLink.map(({ title, to }, i) => {
                  return (
                    <li className="nav-item" key={i}>
                      <Link ClassName="active " to={`${to}`}>
                        {title}
                      </Link>
                    </li>
                  );
                })}

              </ul>
              <ul className="navbar-nav ml-auto text-center align-items-center">


                {!localStorage.getItem('userid') ? (
                  <>
                    {BtnLink.map(({ title, to, style }, i) =>
                      <li className="" key={i}>
                        <Link to={to} ClassName="">
                          <button className={`btn mx-2 ${style}`}>
                            {title}
                          </button>
                        </Link>
                      </li>
                    )}
                  </>
                ) : (
                  <>
                    <li className="">
                      <Link to="/dashboard" ClassName="pry-text">
                        <button className="btn pry white-text">
                          Dashboard
                        </button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
