import React from 'react';

function Services(){

    window.scrollTo(0, 0);

    return(

        <div class='container'>
            <div class="checklist text-center card-header">
                    <h2>Our Services</h2>
                    <br/>
                    <h2>Electrical Control & Instrumentation</h2>
                    <br/>
                    <div class='card-body'>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <i></i>
                            <span>Mineral Mining</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <i></i>
                            <span>Platinum</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <i></i>
                            <span>Gold</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <i></i>
                            <span>Energy</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <i></i>
                            <span>Water Processing</span>
                        </label>
                        <label>
                            <input type="checkbox" name="" id="" />
                            <i></i>
                            <span>Processes</span>
                        </label>
                    </div>
            </div>

        </div>

    )

}

export default Services;