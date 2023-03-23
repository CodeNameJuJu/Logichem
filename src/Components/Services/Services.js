import React from 'react';

function Services(){

    window.scrollTo(0, 0);

    return(

    <>        
        <div>
            <div class="container-xxl p-3 mt-3 bg-color mb-5">
                <h2 class='typing typing-effect text-center'>Our Services</h2>
                <div class='container-fluid container mt-3'>
                    <div id="demo" class="carousel slide background-body" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>
                        <div class="carousel-inner image-screen">
                            <div class="carousel-item active">
                                <img src="./Project Photos/EDS 1/1 MCC-4.jpg" alt="#" class="image-screen" width='1400' height='600' />
                            </div>
                            <div class="carousel-item">
                                <img src="./WhatsApp.jpeg" alt="#" class="image-screen" width='1400' height='600' />
                            </div>
                            <div class="carousel-item">
                                <img src="./EDS-Stark.jpg" alt="#" class="image-screen" width='1400' height='600' />
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
                <br/>
                <h2 class="text-center">Electrical Control & Instrumentation</h2>
                <br/>
                <div class="container">
                    <div class="row">
                        <div class="image">
                            <img src="./minerals.jpg" alt="#" width='200' height='200' />
                        </div>
                        <div class="text">
                            <h3><strong>Mineral Mining</strong></h3>
                            <ul>
                                <li>Increase production efficiency to reduce costs and improve profitability.</li>
                                <li>Implement sustainable mining practices to minimize environmental impact.</li>
                                <li>Improve safety measures for workers and reduce the risk of accidents.</li>
                                <li>Conduct research to identify and extract previously undiscovered mineral deposits.</li>
                                <li>Implement advanced automation technologies to increase productivity and reduce downtime.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="image">
                            <img src="./platinum.jpg" alt="#" width='80' height='80' />
                        </div>
                        <div class="text">
                            <h3><strong>Platinum</strong></h3>
                            <ul>
                                <li>Improve refining processes to increase purity and quality of platinum output.</li>
                                <li>Increase the volume of platinum production to meet growing demand.</li>
                                <li>Conduct research to identify and extract new sources of platinum.</li>
                                <li>Develop and implement sustainable mining practices to reduce environmental impact.</li>
                                <li>Improve safety measures for workers and reduce the risk of accidents.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="image">
                            <img src="./gold.jpg" alt="#" class="image-screen" width='80' height='80' />
                        </div>
                        <div class="text">
                            <h3><strong>Gold</strong></h3>
                            <ul>
                                <li>Improve extraction processes to increase yield and reduce waste.</li>
                                <li>Implement sustainable mining practices to minimize environmental impact.</li>
                                <li>Conduct research to identify and extract new sources of gold.</li>
                                <li>Increase the volume of gold production to meet growing demand.</li>
                                <li>Develop advanced technologies to improve the efficiency and safety of mining operations.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="image">
                            <img src="./energy.jpg" alt="#" width='80' height='80' />
                        </div>
                        <div class="text">
                            <h3><strong>Energy</strong></h3>
                            <ul>
                                <li>Increase the use of renewable energy sources to reduce reliance on fossil fuels.</li>
                                <li>Develop and implement energy-efficient technologies to reduce energy consumption.</li>
                                <li>Improve infrastructure for energy storage and distribution.</li>
                                <li>Reduce greenhouse gas emissions and environmental impact of energy production.</li>
                                <li>Conduct research to identify and develop new energy sources.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="image">
                            <img src="./water.jpg" alt="#" width='80' height='80' />
                        </div>
                        <div class="text">
                            <h3><strong>Water Processing</strong></h3>
                            <ul>
                                <li>Increase the efficiency and effectiveness of water treatment processes.</li>
                                <li>Develop and implement sustainable water management practices.</li>
                                <li>Reduce the environmental impact of water treatment and processing operations.</li>
                                <li>Improve the quality of treated water to meet regulatory standards.</li>
                                <li>Conduct research to identify and develop new water treatment technologies.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                    <div class="image">
                        <img src="./processes.jpg" alt="#" width='80' height='80' />
                    </div>
                    <div class="text">
                        <h3><strong>Processes</strong></h3>
                        <ul>
                            <li>Increase production efficiency to reduce costs and improve profitability.</li>
                            <li>Improve product quality and consistency.</li>
                            <li>Develop and implement new manufacturing processes to reduce waste and increase productivity.</li>
                            <li>Reduce the environmental impact of manufacturing operations.</li>
                            <li>Improve safety measures for workers and reduce the risk of accidents.</li>
                        </ul>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</>

    )

}

export default Services;