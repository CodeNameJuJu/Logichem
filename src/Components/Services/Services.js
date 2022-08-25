import React from 'react';

function Services(){

    window.scrollTo(0, 0);

    return(

        <div class='container-xxl p-3 mt-3 bg-light shadow-sm p-3 mb-5 rounded'>
            <div class='text-center'>
                <h2>Our Services</h2>
                <h2>EC&I</h2>
                <h3>Electrical Control & Instrumentation</h3>
            </div>
            <div class='row'>
                <div class='card column'>
                    <h4 class='card-title'>Mineral Mining</h4>
                </div>
                <div class='card column'>
                    <h4 class='card-title'>Platinum</h4>
                </div>
                <div class='card column'>
                    <h4 class='card-title'>Gold</h4>
                </div>
            </div>
            <div class='row'>
                <div class='card column'>
                    <h4 class='card-title'>Energy</h4>
                </div>
                <div class='card column'>
                    <h4 class='card-title'>Water Processing</h4>
                </div>
                <div class='card column'>
                    <h4 class='card-title'>Processes</h4>
                </div>
            </div>
        </div>

    )

}

export default Services;