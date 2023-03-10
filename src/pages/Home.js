import React from "react"
import logo from '../assets/logo/logo1.svg'
import News from "../components/NewsCarousel/News";
import Footer from "../components/Footer/Footer";
import {useAuth} from "../components/Auth/Auth";

export default function Home() {
    const auth = useAuth()
    console.log("HOme")
    console.log(auth.email)
    return (
        <div>
            {auth.role !== "PATIENT" ?
                <div className="home-main-text">
                    <div className="fs-1 px-4">App Sick</div>
                    <div className="fs-2">With our help you can make an appointment quickly and safely.<br/>
                        Give it a try now.
                        <br/>
                        DO PRZEROBIENIA
                        <br/><br/></div>
                    <div className="fs-4">
                        AppSick is a promising startup in the private health sector in Poland. Our ambition is to deliver
                        the most accessible and convenient systems for private healthcare market. This means a commitment to
                        excellent customer experience, through great service and value.
                        Our application is aimed at coordination of private healthcare companies. We offer management
                        systems for both digital & local consultations between a patient and a doctor.
                    </div>
                    <div className="article">
                        <div className="article-in">
                            <button className="btn fs-1 border-2 border-white text-white">START WITH US</button>
                        </div>
                    </div>
                </div>
                : <div className="home-main-text">
                    <div className="fs-1 px-4">App Sick</div>
                    <div className="fs-2">With our help you can make an appointment quickly and safely.<br/>
                        Give it a try now.
                        <br/>
                        Zalogowany User
                        <br/><br/></div>
                    <div className="fs-4">
                        AppSick is a promising startup in the private health sector in Poland. Our ambition is to deliver
                        the most accessible and convenient systems for private healthcare market. This means a commitment to
                        excellent customer experience, through great service and value.
                        Our application is aimed at coordination of private healthcare companies. We offer management
                        systems for both digital & local consultations between a patient and a doctor.
                    </div>
                    <div className="article">
                        <div className="article-in">
                            <button className="btn fs-1 border-2 border-white text-white">START WITH US</button>
                        </div>
                    </div>
                </div>
            }



            <News/>


            <div className={"main-container-of-slides"}>
                <div className={"container-of-slides"}>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={logo} className="d-block w-10 opacity-0 " alt="..."/>
                                <div className="carousel-caption d-none d-md-block text-dark text-slider">
                                    <div className="fs-3">Klara</div>
                                    <p>Polecam pediatra mi??y i kompetentny. Nie ma presji czasu a wi??c mozna przegada??
                                        wszystko z czym sie przysz??o.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="d-block w-10 opacity-0" alt="..."/>
                                <div className="carousel-caption d-none d-md-block text-dark text-slider">
                                    <div className="fs-3">Hania</div>
                                    <p>Bardzo udana wsp????praca. Cena nie zniech??ca, zw??aszcza ??e korzystam ??rednio raz
                                        na 3-4 miesi??ce.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="d-block w-10 opacity-0" alt="..."/>
                                <div className="carousel-caption d-none d-md-block text-dark text-slider">
                                    <div className="fs-3">Marek</div>
                                    <p>Idealne w okresie grypowym. Bez problemu uzyska??am recept?? i L4. Dziekuj?? za
                                        pomoc!</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>
            </div>
            <Footer/>
        </div>
    );
}