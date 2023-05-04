import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Footer(){

    return(

        <footer className='footer py-3 my-4 shadow-sm p-3 mb-5'>
            {/* Footer Section */}
            <div className='footer-text bg-dark text-wrap text-muted text-center'>
                <pre>
                    <strong>
                        Over the past 30 odd years, we have earned a reputation for engineering services of the highest quality,
                    </strong>
                </pre>
                <pre>
                    <strong>
                        competitive costing as well as an unbiased approach in the selection of suppliers.
                    </strong>
                </pre>
                
                <br/>
                <br/>
                
                {/* Footer Links */}
                <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li className='nav-item'>
                        <Link className='nav-link footer-icon' to='/' title='Home'>
                            <i className='bx bx-home-alt bx-sm' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link footer-icon' to='/Services' title='Services'>
                            <i className='bx bx-hard-hat bx-sm' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link footer-icon' to='/Projects' title='Projects'>
                            <i className='bx bx-folder bx-sm' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link footer-icon' to='/Store' title='Store'>
                            <i className='bx bx-cart bx-sm' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link footer-icon' to='/Contact' title='Contact'>
                            <i className='bx bx-envelope bx-sm' />
                        </Link>
                    </li>
                </ul>
                {/* Footer Copyright */}
                <div>
                    <p className='text-start text-muted'>© 2022 Copyright, All rights reserved.</p>
                </div>
            </div>

        </footer>

    )

}

export default Footer;