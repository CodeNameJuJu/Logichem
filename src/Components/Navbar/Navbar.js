import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';

function Navbar(){

    return(

        <>
            <div className='bg-white sticky-top rounded'>
                <nav className='navbar navbar-expand-sm'>
                    <div className='container-fluid'>
                        <Link className='navbar-brand' to='/' title='Logichem'>
                            <img src='./Logo.jpeg' alt='#' width='400' height='120'/>
                        </Link>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse justify-content-end' id='collapsibleNavbar'>
                            <ul className='nav justify-content-center'>
                                <li className='nav-item'>
                                    <Link className='nav-link link-text' to='/' title='Home'>
                                        Home
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link link-text' to='/Services' title='Services'>
                                        Services
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link link-text' to='/Projects' title='Projects'>
                                        Projects
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link link-text' to='/Store' title='Store'>
                                        Store
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link link-text' to='/Contact' title='Contact'>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
        

    )

}

export default Navbar