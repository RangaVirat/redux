import React from 'react';

class Portfolio extends React.Component {
    render() {
        return (<>
            <div className="container-fluid purple aboutpadding">
                <br />
                <div className="container navyblue " id="portfolio">
                    <h2 className="text-center pos4">PORTFOLIO</h2>
                    <h2 className="text-center h3 mt-3 pos54">Some Of My Recent Projects</h2>

                    {/* <!------------------------------DYNAMIC TABS----------------------------------------------------------------------------------> */}
                    <nav>
                        <div className="nav nav-tabs justify-content-center my-3 " id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                                type="button" role="tab" aria-controls="nav-home" aria-selected="true">NEW</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                                type="button" role="tab" aria-controls="nav-profile" aria-selected="false">ALL</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                                type="button" role="tab" aria-controls="nav-contact" aria-selected="false">PERSONAL</button>
                        </div>
                    </nav>
                    {/* <!---------------------------------------------NEW PROJECTS IN DYNAMIC TAB-----------------------------------------------------------------------> */}
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid ">
                                    <a className="navbar-brand" href="#"><i className="bi bi-emoji-smile"></i></a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbar" aria-controls="navbarNavDropdown" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-end" id="navbar">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="about.html">about</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="contact.html">contact</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#firstlink">
                                                    services</a>
                                                <ul className="dropdown-menu text-center" id="firstlink">
                                                    <li><a href="" className="dropdown-item">mobiles</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a href="display.html" className="dropdown-item">refrigerators</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a href="" className="dropdown-item">washing machines</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>

                                                    <li><a href="" className="dropdown-item">laptops</a></li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li><a href="" className="dropdown-item">groceries</a></li>
                                                </ul>

                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="testominals.html">testominals</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="container-fluid aboutpadding ">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <ul className="list-group">
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Mobiles
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i>
                                                Electronics</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Goods</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Books</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Groceries
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Fashion
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Mens wear
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Womens
                                                wear</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Kids</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Housing
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Gadjets
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Play
                                                Stations</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Mobiles
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i>
                                                Electronics</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Goods</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Books</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Groceries
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Fashion
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Mens wear
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Womens
                                                wear</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Kids</li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Housing
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Gadjets
                                            </li>
                                            <li className="list-group-item"><i className="bi bi-arrow-right-circle-fill"></i> Play
                                                Stations</li>

                                        </ul>
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                                        RAM
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <ul className="list-group">
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 6 GB & ABOVE
                                                            </li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 4GB</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 3GB</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 2GB</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 1GB</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> 512MB</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> LESS THAN
                                                                512MB</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed " type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        COMPANIES
                                                    </button>

                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <form>
                                                            <input type="search" placeholder="search..." />
                                                        </form>
                                                        <ul className="list-group">
                                                            <li className="list-group-item"><i className="bi bi-box"></i> OPPO </li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> RENO</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> VIVO</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> REDMI</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> MOTOROLA</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> SAMSUNG</li>
                                                            <li className="list-group-item"><i className="bi bi-box"></i> I-PHONE</li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-10 col-sm-12">
                                        {/* <!-------image slider--> */}
                                        <div id="mobileproductslider" className="carousel slide carousel-fade mb-2 slidertop"
                                            data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="0" className="active" aria-current="true"
                                                    aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>

                                            <div className="carousel-inner">
                                                <div className="carousel-item " data-bs-interval="3000">
                                                    <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" className="d-block w-100" />

                                                </div>
                                                <div className="carousel-item" data-bs-interval="3000">
                                                    <img src="http://wallpaperping.com/wp-content/uploads/2019/08/blog-img1-the-3d-photo-editor-for-your-honor-view20.jpg" className="d-block w-100" />
                                                </div>

                                                <div className="carousel-item active" data-bs-interval="3000">
                                                    <img src="https://www.hihonor.com/content/dam/honor/global/blog/2019/how-to-take-good-photos-with-honor-20/blogs-fb-how-to-take-good-photos-with-honor-20.jpg" className="d-block w-100" />
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev " type="button" href="#mobileproductslider"
                                                data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon"></span>
                                            </a>
                                            <a className="carousel-control-next" type="button" href="#mobileproductslider"
                                                data-bs-slide="next">
                                                <span className="carousel-control-next-icon"></span>
                                            </a>
                                        </div>


                                        {/* <!-------image slider--> */}
                                        <div className="container-fluid picker aboutpadding">
                                            <div className="row med">
                                                <div className="col-lg-6 col-sm-12">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        <img src="https://images-na.ssl-images-amazon.com/images/I/61fy%2Bu9uqPL._SL1500_.jpg" alt="Mobile-vivo"
                                                            className="mt-2 w-25 h-100 mx-auto how trance" />
                                                        <h3 className="h5 mt-2">Samsung Galaxy M31</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up the
                                                            bulk of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-6 col-sm-12 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        <img src="https://images-na.ssl-images-amazon.com/images/I/61fy%2Bu9uqPL._SL1500_.jpg" alt="Mobile-vivo"
                                                            className="mt-2 w-25 h-100 mx-auto rance" />
                                                        <h3 className="h5 mt-2">Samsung Note Y12</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up the
                                                            bulk of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                            </div>
                                            {/* <!---------- <div className="container-fluid bg-warning p-5">--> */}
                                            <div className="row mt-4 med">
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/redmi.jpg" alt="Mobile-vivo"
                                                                className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Redmi 10pro</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/samsung.jpg" alt="Mobile-vivo"
                                                        className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Samsung Galaxy M31</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/samsung2.jpg" alt="Mobile-vivo"
                                                        className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Samsung Note M31</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>


                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/oppoa31.jpg" alt="Mobile-vivo"
                                                        className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Oppo A 80+</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                            </div>
                                            {/* <!--------   <div className="container-fluid bg-info p-5">--> */}
                                            <div className="row mt-4 med">
                                                <div className="col-lg-3 col-sm-6 med">
                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/oppoa74.jpg" alt="Mobile-vivo"
                                                        className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Oppo 74+ 5G</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">
                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/vivo.jpg" alt="Mobile-vivo"
                                                            className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Oppo Y12 s</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/y31.jpg" alt="Mobile-vivo"
                                                                className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">Vivo y31</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>


                                                </div>
                                                <div className="col-lg-3 col-sm-6 med">


                                                    <figure
                                                        className="card text-center w-100 h-100  border-2 border-danger border-circle mx-auto my-auto">
                                                        {/* <img src="images/mobile.jpeg" alt="Mobile-vivo"
                                                                    className="mt-2 w-50 h-100 mx-auto"> */}
                                                        <h3 className="h5 mt-2">One Plus A40</h3>
                                                        <p className="card-text">Some quick example text to build on the card title
                                                            and make up
                                                            the
                                                            bulk
                                                            of
                                                            the card's
                                                            content.

                                                        </p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="navigation aboutpaddings justify-content-center d-flex mt-2">
                                                <ul className="pagination inmedia">
                                                    <li className="list-group-item mar">1</li>
                                                    <li className="list-group-item mar">2</li>
                                                    <li className="list-group-item mar">3</li>
                                                    <li className="list-group-item mar">4</li>
                                                    <li className="list-group-item mar">5</li>
                                                    <li className="list-group-item mar">6</li>
                                                    <li className="list-group-item mar">7</li>
                                                    <li className="list-group-item mar">8</li>
                                                    <li className="list-group-item mar">9</li>
                                                    <li className="list-group-item mar">10</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!---------footer section--> */}
                            <div className="footer-dark">
                                <footer>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-3 item">
                                                <h3>Services</h3>
                                                <ul>
                                                    <li><a href="#">Web design</a></li>
                                                    <li><a href="#">Development</a></li>
                                                    <li><a href="#">Hosting</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-md-3 item">
                                                <h3>About</h3>
                                                <ul>
                                                    <li><a href="#">Company</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Careers</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 item text">
                                                <h3>Company Name</h3>
                                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem
                                                    lacus. Ut vehicula
                                                    rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit
                                                    pulvinar dictum
                                                    vel in justo.</p>
                                            </div>
                                            <div className="col item social"><a href="#"><i className="bi bi-facebook fb"></i></a><a
                                                href="#"><i className="bi bi-twitter tw"></i></a><a href="#"><i
                                                    className="bi bi-instagram insta"></i></a><a href="#"><i
                                                        className="bi bi-whatsapp ws"></i></a></div>
                                        </div>
                                        <p className="copyright">Metro Labs © 2018</p>
                                    </div>
                                </footer>
                            </div>
                        </div>
                        {/* <!---------------------------NEW PROJECTS IN DYNAMIC TAB  ------------------------------------------> */}

                        {/* <!---------------------------------------------------ALL PROJECTS IN DYNAMIC TAB----------------------> */}
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                           
                            <h1 align="center">VIRAT KOHLI</h1>
                        {/* <img width="30%" height="600px" border="1" align="right" hspace="10" vspace="30"
                                                                        src="https://i.pinimg.com/originals/1c/7c/11/1c7c117a12a64b1e21e5cbf003a0147a.jpg"
                                                                        className="sest"> */}
                            <h3 style={{ color: 'rgb(6, 243, 77);' }}>EARLY LIFE</h3>
                            <p>
                            India has given to the world many a great cricketer but perhaps none as ambitious as Virat Kohli.
                            To meet his ambition, Kohli employed the technical assiduousness of Sachin Tendulkar and fitness that
                            was in the league of top athletes in the world, not just cricketers.As a result, Kohli became the
                            most consistent all-format accumulator of his time, making jaw-dropping chases look easy,
                            and finding, in his own words, the safest possible way to score runs.Plenty of them.
                            </p>
                            <hr />
                            <h3 style={{ color: 'rgb(248, 26, 10);' }}> CAREER</h3>
                            <p>
                            An Under-19 world Cup-winning captain, when he burst onto the scene, Kohli was a precocious talent
                            with a cover drive to kill for.He was destined to be India's next big batsman as the Tendulkar era
                            began to retire, but Kohli wanted to be more: a cricketer whom the opposition would be in awe of,
                            a cricketer whose presence would raise the intensity of the contest.He lived every ball, competed
                            each moment, and made sure he had the fitness and strength to do so.He was widely credited for changing
                            the fitness culture in Indian cricket, introducing endurance tests as a criterion for selection..
                            </p>











                        </div>
                        {/* <!---------------------------------------------------ALL PROJECTS IN DYNAMIC TAB-------------------------------------> */}

                        {/* <!--------------------------------------------PERSONAL PROJECT IN DYNAMIC TAB--------------------------------------> */}
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className="container-fluid bg-dark text-white">
                                <div className="container-fluid bg-dark text-white margincontact">
                                    <div className="row">
                                        <div className="col-lg-3  col-sm-12 col-12 rest mt-1">
                                            <h2>Find us</h2>
                                            <p>It is a long established fact that a reader will be distracted by the readable
                                                content of a page when
                                                looking at its layout. The point of using Lorem Ipsum is that</p>
                                            <p><i className="bi bi-arrow-bar-right"></i> 9878/25 sec 9 rohini45</p>
                                            <p><i className="bi bi-phone"></i> 9875968426</p>
                                            <p><i className="bi bi-envelope"></i> metrolabs@gmail.com</p>
                                        </div>
                                        <div className="col-lg-3 col-sm-12 col-12 rest">
                                            <h2>Quick Links</h2>

                                            <p>image rectouching</p>
                                            <p>clip pathing</p>
                                            <p>hallow manage</p>
                                            <p>amazon</p>
                                            <p>hair masking/clipping</p>
                                            <p>image croping</p>

                                        </div>
                                        <div className="col-lg-3  col-sm-12 col-12 rest mt-1">
                                            <h2>Quick Links</h2>

                                            <p>remove background</p>
                                            <p>shadow reflection</p>
                                            <p>logo</p>
                                            <p>vectorization</p>
                                            <p>hair masking/clipping</p>
                                            <p>image crapping</p>

                                        </div>
                                        <div className="col-lg-3  col-sm-12 col-12 mt-1">
                                            <h2>Follow Us</h2>
                                            <p><i className="bi bi-twitter"></i>lorem ipsum is the dummy text for the printing</p>
                                            <p><i className="bi bi-twitter"></i>lorem ipsum is the dummy text for the printing</p>
                                            <p><i className="bi bi-twitter"></i>lorem ipsum is the dummy text for the printing</p>

                                        </div>
                                    </div>
                                    <hr />

                                    <p className="text-center">copyright@2017/company name</p>

                                    <p className="text-center mal"><i className="bi bi-facebook m-3"></i> <i
                                        className="bi bi-twitter m-3"></i>
                                        <i className="bi bi-instagram m-3"></i> <i className="bi bi-whatsapp m-3"> </i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!--------------------------------------PERSONAL SECTION IN DYNAMIC TABS-----------------------------------------------> */}
                    </div>
                </div>
            </div>

        </>)
    }
}
export default Portfolio