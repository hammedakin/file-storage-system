import React from 'react'

const Features = () => {

    const features = [
        {
            icon: "bi-card-checklist",
            title: "File Classification",
            content: "Our advance AI will sort your files accordingly"
        },
        {
            icon: "bi-file-earmark-lock2",
            title: "Secured",
            content: "All your files are secured and accessible anywhere in the world"
        },
        {
            icon: "bi-upload",
            title: "Auto Upload",
            content: "Set any folder on your device as your auto upload folder"
        },
    ]

    return (
        <section className='features light-bg text-center py-5'>
            <div className="container">
                <div className="my-5">
                    <h3 className="fw-bolder">
                        Features
                    </h3>
                </div>
                <div className="row justify-content-between">
                    {
                        features.map(({ icon, title, content }, i) =>

                            <div className="col-md-4 py-2" key={i}>
                                <div className="border py-5 container h-100">
                                    <div className="mb-5 mt-4">
                                        <i className={`bi p-4 h1 br-lg mb-4 sec ${icon} `} />
                                    </div>

                                    <h4 className="py-3 fw-bolder">
                                        {title}
                                    </h4>
                                    <div className="col-8 mx-auto">
                                        <h6 className="">
                                           {content}
                                        </h6>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Features;