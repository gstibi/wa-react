import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function Nav() {
  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark justify-content-center'>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link to='/' className='nav-link'>Now</Link>
            </li>
            <li className='nav-item'>
                <Link to='/Forecast' className='nav-link'>Forecast</Link>
            </li>
            <li className='nav-item'>
                <Link to='/ChartForecast' className='nav-link'>Charts</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
