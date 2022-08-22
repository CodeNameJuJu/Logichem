import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';

function Navbar(){

    return(

        <div class='bg-white sticky-top border-bottom pb-3 mb-3 shadow-sm p-3 mb-5 bg-body rounded'>
            <nav class='navbar navbar-expand-sm'>
                <div class='container-fluid'>
                    <Link class='navbar-brand' to='/' title='Logichem'>
                        <img src='Logo.jpeg' alt='#' width='320' height='75'/>
                    </Link>
                    <button class='navbar-toggler' type='button' data-bs-toggle='collapse'>
                        <span class='navbar-toggler-icon'></span>
                    </button>
                    <div class='collapse navbar-collapse justify-content-end' id='collapsibleNavbar'>
                        <ul class='nav justify-content-center'>
                            <li class='nav-item'>
                                <Link class='nav-link link-text' to='/' title='Home'>
                                    Home
                                </Link>
                            </li>
                            <li class='nav-item'>
                                <Link class='nav-link link-text' to='/Services' title='Services'>
                                    Services
                                </Link>
                            </li>
                            <li class='nav-item'>
                                <Link class='nav-link link-text' to='/Projects' title='Projects'>
                                    Projects
                                </Link>
                            </li>
                            <li class='nav-item'>
                                <Link class='nav-link link-text' to='/Contact' title='Contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )

}

export default Navbar