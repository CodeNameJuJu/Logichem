import React from 'react';

function Projects(){

    window.scrollTo(0, 0);

    return(
        
        <div class='container p-3 mt-3 bg-color mb-5'>
            {/* Projects Section */}
            <div class='row'>
                <div class='text-center typing'>
                    <h2 class='typing-effect'>Our Projects</h2>
                </div>

                <div class="view">  
                <img src='./Project Photos/Water/1.jpg' alt='#' width='372px' height='300px'/>
                    <div class="mask">  
                        <h2>Water</h2>
                    </div>  
                </div>

                <div class="view">  
                <img src='./Project Photos/Bisha/4.jpg' alt='#' width='372px' height='300px'/>
                    <div class="mask">  
                        <h2>Bisha</h2>
                    </div>  
                </div>

                <div class="view">  
                <img src='./Project Photos/EDS 1/1 MCC-4.jpg' alt='#' width='372px' height='300px'/> 
                    <div class="mask">  
                        <h2>EDS</h2>
                    </div>  
                </div>

                <div class="view">  
                <img src='./Project Photos/Gold/1.jpeg' alt='#' width='372px' height='300px'/>
                    <div class="mask">  
                        <h2>Gold</h2>
                    </div>  
                </div>

                <div class="view">  
                <img src='./EMDAS.jpg' alt='#' width='372px' height='300px'/> 
                    <div class="mask">  
                        <h2>Omnia</h2>
                    </div>  
                </div>

                <div class="view">  
                    <img src='./Manica.jpeg' alt='#' width='372px' height='300px'/>  
                    <div class="mask">  
                        <h2>Manica</h2>
                    </div>  
                </div>

            </div>
        </div>

    )

}

export default Projects;