import React from "react";
import MapChart from "./MapChart";

function Home(){

    window.scrollTo(0, 0);

    return(

            <div>
                <div className='container-xxl p-3 mt-3 bg-color mb-5 text-center'>
                <div className='text-center'>
                    <h1 className='home-heading'>Engineering a better world, one project at a time.</h1>
                </div>
                    {/* World Map */}
                    <MapChart />
                    <div className='container mt-3 text-center text'>

                        <br />
                        {/* History Paragraph */}
                        <div className='border-bottom pb-3 mb-3'>
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
                    
                    {/* Vision Paragraph */}
                    <div className='row'>
                        <div className='col-md-5 column-alt'>
                            <br />
                            <br />
                            <div className='border-bottom'>
                                <h4 className='card-title'>Our Vision</h4>
                            </div>
                            <div className='card-body'>
                                <p>
                                With over 30 years of experience in the engineering sector, our management and team have recognized that satisfied clients are integral to success in a highly competitive industry. 
                                As we look towards the future, our vision for the next three decades is centered around the following goals:
                                </p>
                                <br />
                                <ul>
                                    <li>To continuously uphold our strong work ethic and unwavering dedication to quality</li>
                                    <li>To pursue excellence and innovation through ongoing improvement of our services and solutions</li>
                                    <li>To enhance our project execution capabilities to exceed client expectations and achieve unparalleled levels of satisfaction.</li>
                                </ul>
                            </div>

                        </div>

                        <br />
                        <br />

                        {/* Mission Paragraph */}
                        <div className='col-md-5 column-alt'>
                            <br />
                            <br />
                            <div className='border-bottom'>
                                <h4 className='card-title'>Our Mission</h4>
                            </div>
                            <div className='card-body'>
                                <p>At Logichem, our mission is to leverage our extensive experience in the engineering field to deliver exceptional results for our clients. Over the past 30 years, 
                                    we have honed our expertise in project execution, dedicated engineering, innovative approaches, and successful implementation of all EC&I related activities.
                                    Our commitment to fostering an open and supportive work environment has enabled us to create a culture of continuous learning and improvement.</p>
                                <br />
                                <p>Moving forward, we remain committed to upholding our exceptional work ethic, management approach, and engineering applications, 
                                    as we continue to pursue excellence and innovation. Our focus on quality and dedication to client satisfaction will remain at the forefront of everything we do.
                                    By leveraging our expertise, embracing innovation, and continuously striving for improvement, 
                                    we aim to deliver value to our clients and maintain our position as a leading force in the engineering industry for the next 30 years and beyond.</p>
                            </div>

                            <br />

                        </div>
                    </div>

                    {/* Accredidation Badges */}
                    <div className='row'>

                        <div className='column'>
                            <img src='./Mine.jpg' alt='#' width = '100%' height='350px'/>
                        </div> 

                        <div className='column'>
                            <img src='./Manica.jpg' alt='#' width = '100%' height='350px'/>
                        </div> 

                        <div className='column'>
                            <img src='./Photo.jpg' alt='#' width = '100%' height='350px'/>
                    </div>

                    <div className='container mt-3 text-center text'>

                        <br />
                        <br />

                        {/* Interactive Values section */}
                        <div className='card-header bg-color'>
                            <h4>Our Values</h4>
                        </div>



                        <div className='row'>
                            <div className='col-md-5 column-alt'>
                                <main>
                                    <details>
                                        <summary className='bg-color card-title'>Determination</summary>
                                        <div className="tab-content card-body">
                                        <p>We are persistent and commitment to achieve a challenging goal despite encountering obstacles, and it is a crucial characteristic for us to possess when solving complex problems.</p>
                                        </div>
                                    </details>
                                    <details>
                                        <summary className='bg-color card-title'>Sufficiency</summary>
                                        <div className="tab-content card-body">
                                        <p>The sufficiency strategy encourages optimizing resource utilization and minimizing waste, resulting in the creation of sustainable solutions that meet the necessary functional requirements.</p>
                                        </div>
                                    </details>
                                    <details>
                                        <summary className='bg-color card-title'>Trust</summary>
                                        <div className="tab-content card-body">
                                        <p>It is built on the foundation of reliability, accuracy, and safety. We must ensure that our designs and products are trustworthy by following established standards and regulations, performing rigorous testing, and maintaining transparency with stakeholders.</p>
                                        </div>
                                    </details>
                                </main>
                            </div>

                            <div className='col-md-5 column-alt'>
                                <main>
                                    <details>
                                        <summary className='bg-color card-title'>Efficiency</summary>
                                        <div className="tab-content card-body">
                                        <p>The ability to produce high-quality services while utilizing minimum resources, including time, energy, and materials. Efficient engineering practices enable the creation of cost-effective solutions that meet customer requirements.</p>
                                        </div>
                                    </details>
                                    <details>
                                        <summary className='bg-color card-title'>Effectiveness</summary>
                                        <div className="tab-content card-body">
                                        <p>Measuring the degree to which a product or process achieves its intended purpose, and is a key metric for evaluating the success of all our projects. Our effective EC&! engineering solutions meet customer needs, are reliable, and provide value.</p>
                                        </div>
                                    </details>
                                    <details>
                                        <summary className='bg-color card-title'>Hard work</summary>
                                        <div className="tab-content card-body">
                                        <p>Our projects require significant effort, dedication, and perseverance to succeed. We must possess strong work ethics and be willing to put in the hard work necessary to overcome challenges, solve problems, and deliver high-quality solutions.</p>
                                        </div>
                                    </details>
                                </main>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/* Partner Companies */}
            <div>
                <div className='row bg-white logo-banner'>

                    <div className='col'>
                        <img src='./EDS.jpg' alt='#' width = '60%' height='125px'/>
                    </div> 

                    <div className='col'>
                        <img src='./EHL.png' alt='#' width = '65%' height='125px'/>
                    </div> 

                    <div className='col'>
                        <img src='./Howden.png' alt='#' width = '60%' height='125px'/>
                    </div>

                    <div className='col'>
                        <img src='./LP.png' alt='#' width = '50%' height='125px'/>
                    </div>
            </div>
        </div>
    </div>
    )

}


export default Home;