import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Footer(){

    return(

        <footer class='footer py-3 my-4 shadow-sm p-3 mb-5'>

            <div class='footer-text bg-dark text-wrap text-muted text-center'>
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
                <ul class='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li class='nav-item'>
                        <Link class='nav-link footer-icon' to='/' title='Home'>
                            <i class='bx bx-home-alt bx-sm' />
                        </Link>
                    </li>
                    <li class='nav-item'>
                        <Link class='nav-link footer-icon btn-looking' to='/Services' title='Services'>
                            <i class='bx bx-hard-hat bx-sm' />
                        </Link>
                    </li>
                    <li class='nav-item'>
                        <Link class='nav-link footer-icon' to='/Projects' title='Projects'>
                            <i class='bx bx-folder bx-sm' />
                        </Link>
                    </li>
                    <li class='nav-item'>
                        <Link class='nav-link footer-icon' to='/Contact' title='Contact'>
                            <i class='bx bx-envelope bx-sm' />
                        </Link>
                    </li>
                </ul>
                <div>
                    <p class='text-start text-muted'>© 2022 Logichem, All rights reserved. Designed by Stone Software</p>
                </div>
            </div>

        </footer>

    )

}

export default Footer;