import React from 'react'

function Grid() {
    return (
        <div>
            <div className="container-fluid bgi fot">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 ">
                                <div className="row-lg-12">
                                    <h4 className="tags">LOCATION</h4>
                                </div>
                                <div className="row-lg-12">
                                    <p  >2215 John Daniel Drive Clark, MO 65243</p>
                                </div>
                        </div>
                        <div className="col-lg-4">
                                <div className="row">
                                    <h4 className="tags">AROUND THE WEB</h4>
                                </div>
                                <div className="col">
                                    <a className="social"><i class="fab fa-facebook"></i></a>
                                    <a className="social"><i class="fab fa-twitter"></i></a>
                                    <a className="social"><i class="fab fa-linkedin"></i></a>
                                    <a className="social"><i class="fab fa-dribbble-square"></i></a>
                                </div>
                        </div>
                        <div className="col-lg-4">
                                <div>
                                    <h4 className="tags">ABOUT FREELANCERS</h4>
                                </div>
                                <div className="pb-4">
                                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</p>
                                </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Grid
