import React from "react";
import { Link } from "react-router-dom";
// import gif from "./404.gif";

const PageNotFound = () => {


  return (
    <>
      <section className="pagenotfound white">
        <div className="container ">
          <div className=" text-center">
            {/* <img src={gif} className="gif" width="50%" alt="pagenotfound" /> */}
          </div>

          <div className=" text-center">
            <h4 className="pry-text"> PAGE NOT FOUND </h4>
            <div className="d-flex align-items-center justify-content-center" >
              <Link to="/">
                <button className="btn pry light-text mt-3">
                  <h6 className="m-0">

                  <i className="bi bi-house-fill mr-2" />
                   Home
                  </h6>
                    </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
