import React,{useState} from 'react'
import './Bootstrap.css'
import image from './assets/img/avataaars.svg'
import P1 from './assets/img/portfolio/cabin.png'
import P2 from './assets/img/portfolio/cake.png'
import P3 from './assets/img/portfolio/circus.png'
import P4 from './assets/img/portfolio/game.png'
import P5 from './assets/img/portfolio/safe.png'
import P6 from './assets/img/portfolio/submarine.png'

function Bootstrap() {
    const [btn1,setBtn1]=useState('nav-link')
    const [btn2,setBtn2]=useState('nav-link')
    const [btn3,setBtn3]=useState('nav-link')
    const btn1Handler=()=>{
        setBtn1("nav-link active")
        setBtn2("nav-link")
        setBtn3("nav-link")
    }
    const btn2Handler=()=>{
        setBtn1("nav-link")
        setBtn2("nav-link active")
        setBtn3("nav-link")
    }
    const btn3Handler=()=>{
        setBtn1("nav-link")
        setBtn2("nav-link")
        setBtn3("nav-link active")
    }
    const mainHandler=()=>{
        setBtn1("nav-link")
        setBtn2("nav-link")
        setBtn3("nav-link")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bggg navbar-dark sticky-top" style={{padding:"16px"}}>
               <div className="container">
                    <a onClick={()=>mainHandler()} className="navbar-brand tagss" href="#main">START BOOTSTRAP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a onClick={()=>btn1Handler()} className={btn1} href="#portfolio"><h4 className="link px-3 py-2">Portfolio</h4></a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>btn2Handler()} className={btn2} href="#about"> <h4 className="link px-3 py-2">About</h4></a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>btn3Handler()} className={btn3} href="#contact"><h4 className="link px-3 py-2">Contact</h4></a>
                            </li>
                        </ul>
                    </div>
               </div>
            </nav>
            <header className="masthead d-flex justify-content-center flex-column text-white  jumb" id="main">
                <div className="container divv">
                    <img className="masthead-avatar mb-5" style={{height:"240px",width:"254.5px"}} src={image} alt="" />
                    <h1 className="masthead-heading .masthead text-uppercase mb-0 tagsss">Start Bootstrap</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0 pt-3 ggg">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>
            <div className="jumborton my-5" id="portfolio">
                <h1 className="my-5 portf ">PORTFOLIO</h1>
                <div className="container ">
                    <div className="row my-4">
                        <div className="col-sm-4 ">
                            <img className="img-thumbnail rounded" src={P1}></img>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-thumbnail rounded" src={P2}></img>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-thumbnail rounded" src={P3}></img>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-4 ">
                            <img className="img-thumbnail rounded" src={P4}></img>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-thumbnail rounded" src={P5}></img>
                        </div>
                        <div className="col-sm-4">
                            <img className="img-thumbnail rounded" src={P6}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid about jumb" id="about">
                <div className="jumborton d-flex flex-column align-items-center text-white pt-5">
                    <h1 className=" mt-3 portf text-white pb-4">ABOUT</h1>
                    <div className="container as text-white ">
                        <div className="row  d-flex flex-row  pt-4">
                            <div className="col-sm-6 portff">
                                <p className="text-left ">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-sm-6 portff">
                                <p className="text-left">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn1">Free Download!</button>
                </div>
            </div>
            <div className="jumborton my-5" id="contact">
                <h1 className="portf ">CONTACT ME</h1>
                <div className="container">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control form-control-lg p-3 my-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                            <input type="email" class="form-control form-control-lg p-3 my-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
                            <input type="text" class="form-control form-control-lg p-3 my-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number"/>
                            <textarea type="text" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Message"/>
                        </div>
                    </form>
                </div>
                <div className="container d-flex flex-start">
                    <button type="submit" class="btn2">Submit</button>
                </div>
            </div>
            <div className="container-fluid bgi fot">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-4">
                                <div className="row">
                                    <h4 className="tags">LOCATION</h4>
                                </div>
                                <div className="row">
                                    <p  >2215 John Daniel Drive Clark, MO 65243</p>
                                </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex flex-column justify-content-center">
                                <div>
                                    <h4 className="tags">AROUND THE WEB</h4>
                                </div>
                                <div className="pb-4">
                                    <a className="social"><i class="fab fa-facebook"></i></a>
                                    <a className="social"><i class="fab fa-twitter"></i></a>
                                    <a className="social"><i class="fab fa-linkedin"></i></a>
                                    <a className="social"><i class="fab fa-dribbble-square"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex flex-column justify-content-center">
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
            <div className="container-fluid bgii d-flex flex-row justify-content-center py-3">
                Copyright © Your Website 2020
            </div>
        </div>
        
    )
}

export default Bootstrap
