import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
  } from 'react-simple-maps';
  

function Home(){

    window.scrollTo(0, 0);

    return(

            <div>
                <div class='container-xxl p-3 mt-3 bg-color mb-5'>
                    <div class='container mt-3 text-center text'>

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

                    </div>

                    <br />
                    
                    <div class='row'>
                        <div class='col-md-5 column-alt'>
                            <br />
                            <br />
                            <div>
                                <h4 class='card-title'>Our Vision</h4>
                            </div>
                            <div class='card-body'>
                                <p>
                                    After more than 30 years of experience in the engineering sector, the management and team, 
                                    realized that satisfied client are the key to success in a highly competitive industry.
                                    Therefor our vision for the next 30 years is:
                                </p>
                                <br />
                                <h6>To continue our hard work and dedication.</h6>
                                <h6>To strive for more excellence and innovation.</h6>
                                <h6>To improve project execution and client satisfaction.</h6>
                            </div>

                        </div>

                        <br />
                        <br />

                        <div class='col-md-5 column-alt'>
                            <br />
                            <br />
                            <div>
                                <h4 class='card-title'>Our Mission</h4>
                            </div>
                            <div class='card-body'>
                                <p>Our position in the engineering field has given us our 30 years of experience. </p>
                                <br />
                                <p>30 years of excellent project execution, dedicated engineers, innovation and implementation of all EC&I related activities and a work environment which is open and encouraged for learning.</p>
                                <br />
                                <p>We will keep and improve this work ethic, management approach and engineering application for the coming 30 years.</p>
                            </div>

                            <br />

                        </div>
                    </div>

                    <div class='row'>

                        <div class='column'>
                            <img src='./Project Photos/Gold/1.jpeg' alt='#' width = '100%' height='300px'/>
                        </div> 

                        <div class='column'>
                            <img src='./Project Photos/Gold/2.jpeg' alt='#' width = '100%' height='300px'/>
                        </div> 

                        <div class='column'>
                            <img src='./Project Photos/Gold/3.jpg' alt='#' width = '100%' height='300px'/>
                    </div>

                    <div class='container mt-3 text-center text'>

                        <br />
                        <br />
                        <br />
                        <br />

                        <div class='card-header bg-color'>
                            <h4>Our Values</h4>
                        </div>



                        <div class='row'>
                            <div class='col-md-5 column-alt'>
                                <main>
                                    <details>
                                        <summary class='bg-color card-title'>Determination</summary>
                                        <div class="tab-content card-body">
                                        <p>We are persistent and commitment to achieve a challenging goal despite encountering obstacles, and it is a crucial characteristic for us to possess when solving complex problems.</p>
                                        </div>
                                    </details>
                                    <details>
                                        <summary class='bg-color card-title'>Sufficiency</summary>
                                        <div class="tab-content card-body">
                                        <p>The sufficiency strategy encourages optimizing resource utilization and minimizing waste, resulting in the creation of sustainable solutions that meet the necessary functional requirements.</p>
                                        </div>
                                    </details>
                                    <details>
                                        <summary class='bg-color card-title'>Trust</summary>
                                        <div class="tab-content card-body">
                                        <p>It is built on the foundation of reliability, accuracy, and safety. We must ensure that our designs and products are trustworthy by following established standards and regulations, performing rigorous testing, and maintaining transparency with stakeholders.</p>
                                        </div>
                                    </details>
                                </main>
                            </div>

                            <div class='col-md-5 column-alt'>
                                <main>
                                    <details>
                                        <summary class='bg-color card-title'>Efficiency</summary>
                                        <div class="tab-content card-body">
                                        <p>The ability to produce high-quality services while utilizing minimum resources, including time, energy, and materials. Efficient engineering practices enable the creation of cost-effective solutions that meet customer requirements.</p>
                                        </div>
                                    </details>
                                    <details>
                                        <summary class='bg-color card-title'>Effectiveness</summary>
                                        <div class="tab-content card-body">
                                        <p>Measuring the degree to which a product or process achieves its intended purpose, and is a key metric for evaluating the success of all our projects. Our effective EC&! engineering solutions meet customer needs, are reliable, and provide value.</p>
                                        </div>
                                    </details>
                                    <details>
                                        <summary class='bg-color card-title'>Hard work</summary>
                                        <div class="tab-content card-body">
                                        <p>Our projects require significant effort, dedication, and perseverance to succeed. We must possess strong work ethics and be willing to put in the hard work necessary to overcome challenges, solve problems, and deliver high-quality solutions.</p>
                                        </div>
                                    </details>
                                </main>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div class='row bg-white logo-banner'>

                    <div class='col'>
                        <img src='./EDS.jpg' alt='#' width = '60%' height='125px'/>
                    </div> 

                    <div class='col'>
                        <img src='./EHL.png' alt='#' width = '65%' height='125px'/>
                    </div> 

                    <div class='col'>
                        <img src='./Howden.png' alt='#' width = '60%' height='125px'/>
                    </div>

                    <div class='col'>
                        <img src='./LP.png' alt='#' width = '55%' height='125px'/>
                    </div>
            </div>
        </div>
    </div>

    )

}

export default Home;