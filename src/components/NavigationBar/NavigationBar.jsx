import React from 'react';
import './NavigationBar.scss'
import Logo from '../../img/logo.png'
import { Link } from "react-router-dom";
import { NavigationLinks } from '../../common/navigation-routes'

const NavigationBar = () => (
    <div className="navigation-bar">
        <Link className='logo' to="/">
            <img src={Logo} className='logo' alt=''/>
        </Link>
        <div className='navigation-items'>
            {
                NavigationLinks.map((page, index) => (
                    <Link className='navigation-item' key={index} to={page.route}>{page.name}</Link>
                ))
            }
        </div>
    </div>
)

export default NavigationBar