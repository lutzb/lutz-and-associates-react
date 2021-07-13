import React from 'react';
import './NavigationBar.scss'
import Logo from '../../img/logo.png'
import { NavLink } from "react-router-dom";
import { NavigationLinks } from '../../common/navigation-routes'

function NavigationBar() {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    return (
      <>
        <nav className="nav-bar">
          <div className="nav-container">

            <NavLink exact to="/" className="nav-logo">
                <img  className='nav-logo-img' src={Logo} alt=''/>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                {
                    NavigationLinks.map((page, index) => (
                        <NavLink exact to={page.route} activeClassName="active" className="nav-links" key={index} onClick={handleClick}>
                            {page.name}
                        </NavLink>
                    ))
                }
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    );
  }

export default NavigationBar