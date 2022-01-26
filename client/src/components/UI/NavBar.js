import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';
import logo from '../../image/programming.png';


function NavBar() {
  return <div className="navbar_body">
      <div className="navbar_container">
          <div className="navbar_content">
            <div className="navbar_content--left">
                <div className="navbar_content--left_content">
                    <img src={logo} className='navbar_logo' alt="DSA"/>
                    <div className="navbar_content--left_content-logo">Dsa</div>
                </div>
            </div>
            <div className="navbar_content--right">
                <div className="navbar_content--right_content">
                    <NavLink activeClassName="active" to="/" className="home_page">HOME</NavLink>
                    <NavLink activeClassName="active" to="/add-question" className="add_page">ADD QUESTION</NavLink>
                    <NavLink activeClassName="active" to="/login-signup" className="message_page">LOGIN/SIGN UP</NavLink>
                </div>
            </div>
          </div>
      </div>
  </div>;
}

export default NavBar;
