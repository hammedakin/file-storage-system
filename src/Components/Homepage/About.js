import React from 'react'
import shield from '../assets/shield.svg'
import file from '../assets/file.svg'

const About = () => {
  return (
    <section className="about">
      <div className="sec py-5">

        <div className="container">
          <div className="row align-items-center py-5">

            <div className="col-md-6 text-center">
              <img src={shield} alt="shield" width="50%" />
            </div>
            <div className="col-md-6 py-5 text-center text-md-start ">
              <h1 className="my-3 fw-light">
                Simple and Secure
              </h1>
              <p className="my-1 col-md-8">
                Organize and share your files and folders from your computer, tablet, or smartphone device.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-5">
        <div className="container">

          <div className="row align-items-center my-5 first ">
            <div className="col-md-6 py-5 text-center text-md-start ">
              <h1 className="my-3 fw-light">
                File Classification
              </h1>
              <p className="my-1 col-md-8">
                Our built in AI will automatically sort your files by their extension
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src={file} alt="shield" width="50%" />
            </div>
          </div>
        </div>
      </div>
    </section>)

}

export default About;