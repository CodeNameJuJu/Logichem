import React from 'react';

function Projects(){

    window.scrollTo(0, 0);

    return(

        <div class='container p-3 mt-3 bg-light shadow-sm p-3 mb-5 rounded'>
            <div class='row'>
                <div class='text-center'>
                    <h2>Our Projects</h2>
                </div>

                <div class="view">  
                <img src='./Project Photos/Water/1.jpg' alt='#' width='400px' height='300px'/>
                    <div class="mask">  
                        <h2>Water</h2>
                        <p>Text area</p>
                        <a href="#" class="info">Read More</a>  
                    </div>  
                </div>

                <div class="view">  
                <img src='./Project Photos/Bisha/4.jpg' alt='#' width='400px' height='300px'/>
                    <div class="mask">  
                        <h2>Bisha</h2>
                        <p>Text area</p>
                        <a href="#" class="info">Read More</a>  
                    </div>  
                </div>

                <div class="view">  
                <img src='./Project Photos/EDS/1 MCC-4.jpg' alt='#' width='400px' height='300px'/> 
                    <div class="mask">  
                        <h2>EDS</h2>
                        <p>Text area</p>
                        <a href="#" class="info">Read More</a>  
                    </div>  
                </div>

                <div class="view">  
                <img src='./Project Photos/Gold/1.jpeg' alt='#' width='400px' height='300px'/>
                    <div class="mask">  
                        <h2>Gold</h2>
                        <p>Text area</p>
                        <a href="#" class="info">Read More</a>  
                    </div>  
                </div>

                <div class="view">  
                <img src='Omnia.jpg' alt='#' width='400px' height='300px'/> 
                    <div class="mask">  
                        <h2>Omnia</h2>
                        <p>Text area</p>
                        <a href="#" class="info">Read More</a>  
                    </div>  
                </div>

                <div class="view">  
                    <img src='Manica.jpeg' alt='#' width='400px' height='300px'/>  
                    <div class="mask">  
                        <h2>Manica</h2>
                        <p>Text area</p>
                        <a href="#" class="info">Read More</a>  
                    </div>  
                </div>

            </div>
        </div>

    )

}

export default Projects;