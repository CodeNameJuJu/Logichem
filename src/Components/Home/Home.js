import React from 'react';

function Home(){

    window.scrollTo(0, 0);

    return(
            <div>
                <div class='container-xxl p-3 mt-3 bg-light shadow-sm p-3 mb-5 rounded'>
                    <div class='container-fluid container mt-3 bg-light'>
                        <div id="demo" class="carousel slide background-body" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>
                            <div class="carousel-inner image-screen">
                                <div class="carousel-item active">
                                    <img src="Omnia.jpg" alt="#" class="d-block image-screen" width='1400' height='800' />
                                </div>
                                <div class="carousel-item">
                                    <img src="Omnia.jpg" alt="#" class="d-block image-screen" width='1400' height='800' />
                                </div>
                                <div class="carousel-item">
                                    <img src="Omnia.jpg" alt="#" class="d-block image-screen" width='1400' height='800' />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>

                    <br />
                    
                    <div class='container mt-3 text-center text'>

                        <br />
                        <br />
                        <br />
                        <br />

                        <div class='border-bottom pb-3 mb-3'>
                            <h3>History</h3>
                        </div>
                        <div>
                            <p>
                                Logichem  Control has been providing instrument and control engineering services since 1990 (Previously known as LogiCo since 1987.)  
                                <br />
                                <br />
                                Our company head office is based in Lonehill, Sandton.
                                Over the past 30 odd years, we have earned a reputation for engineering services of the highest quality, competitive costing as well as an unbiased approach in the selection of suppliers.
                                <br />
                                <br />
                                Work ethic for us, revolves around finding the best equipment to meet the project requirements by not designing a solution around the equipment and its capabilities.
                            </p> 
                        </div>

                            <br />
                            <br />
                            <br />
                            <br />

                    </div>

                    <br />
                    <br />

                    <div class='row'>

                        <div class='column'>
                            <img src='Manica.jpeg' alt='#' width = '100%'/>
                        </div> 

                        <div class='column'>
                            <img src='Manica.jpeg' alt='#' width = '100%'/>
                        </div> 

                        <div class='column'>
                            <img src='Manica.jpeg' alt='#' width = '100%'/>
                        

                    </div>

                    <div class='section-4'>
                        <div class='container mt-3 text-center text col-md-5 vision'>

                            <br />
                            <br />
                            <br />
                            <br />

                            <div class='border-bottom pb-3 mb-3'>
                                <h4>Vision</h4>
                            </div>
                            <div >
                                <p>
                                    After more than 30 years of experience in the engineering sector, the management and team, 
                                    realized that satisfied client are the key to success in a highly competitive industry.
                                    Therefor our vision for the next 30 years is:
                                </p>
                                <br />
                                <br />
                                <h5>To continue our hard work and dedication.</h5>
                                <h5>To strive for more excellence and innovation.</h5>
                                <h5>To improve project execution and client satisfaction.</h5>
                            </div>

                        </div>

                        <br />
                        <br />
                        <br />
                        <br />

                        <div class='container mt-3 text-center text col-md-5 mission'>
                            <div class='border-bottom pb-3 mb-3'>
                                <h4>Mission</h4>
                            </div>
                            <div >
                                <h5>Our position in the engineering field has given us our 30 years of experience. </h5>
                                <br />
                                <h5>30 years of excellent project execution, dedicated engineers, innovation and implementation of all EC&I related activities and a work environment which is open and encouraged for learning.</h5>
                                <br />
                                <h5>We will keep and improve this work ethic, management approach and engineering application for the coming 30 years.</h5>
                            </div>

                            <br />
                            <br />
                            <br />
                            <br />

                        </div>
                    </div>

                    <div class='row'>

                        <div class='column'>
                            <img src='Omnia.jpg' alt='#' width = '100%'/>
                        </div> 

                        <div class='column'>
                            <img src='Omnia.jpg' alt='#' width = '100%'/>
                        </div> 

                        <div class='column'>
                            <img src='Omnia.jpg' alt='#' width = '100%'/>
                    </div>

                    <div class='container mt-3 text-center text values'>

                        <br />
                        <br />
                        <br />
                        <br />

                        <div class='border-bottom pb-3 mb-3'>
                            <h4>Values</h4>
                        </div>
                        <div class = 'fancy-values'>
                            <ul>
                                <li>Determination</li>
                                <li>Sufficiency</li>
                                <li>Trust</li>
                                <li>Efficiency</li>
                                <li>Effectiveness</li>
                                <li>Hard work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )

}

export default Home;