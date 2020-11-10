import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const linkStyle = { textDecoration: 'none' }

function Nav() {
  return (
    <nav className='navbar navbar-dark bg-dark justify-content-center'>
        <ul className='nav'>
            <Link to='/' style={linkStyle}>
                <li className='nav-item'>
                    <a className='nav-link'>Current weather</a>
                </li>
            </Link>
            <Link to='/Forecast' style={linkStyle}>
                <li className='nav-link'>Forecast</li>
            </Link>
            <Link to='ChartForecast' style={linkStyle}>
                <li className='nav-link'>Charts</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
