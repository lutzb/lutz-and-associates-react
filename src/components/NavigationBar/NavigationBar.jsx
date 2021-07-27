import React from 'react';
import './NavigationBar.scss'
import Logo from '../../img/logo.png'
import { NavLink } from "react-router-dom";


function NavigationBar() {
  const NavigationLinks = [
    { name: 'Home', route: '/'},
    { name: 'About', route: '/About'},
    { name: 'Services', route: '/Services'},
    { name: 'Blog', route: '/Blog'},
    { name: 'Contact', route: '/Contact'},
  ]

  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <NavLink exact to="/">
            <img  className='nav-logo-img' src={Logo} alt=''/>
        </NavLink>
      </div>
      <ul className={click ? "nav-menu menu-show" : "nav-menu"}>
          {
              NavigationLinks.map((page, index) => (
                <div className='a-row' key={index} >
                  <NavLink exact to={page.route} className="nav-links" activeClassName="active-page" onClick={handleClick}>
                      <div className='nav-item'>
                        {page.name}
                      </div>
                  </NavLink>
                </div>
              ))
          }
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
    </div>
  );
}

export default NavigationBar