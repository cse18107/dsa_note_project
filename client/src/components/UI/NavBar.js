import React from 'react';
import './NavBar.css';

function NavBar() {
  return <div className="navbar_body">
      <div className="navbar_container">
          <div className="navbar_content">
            <div className="navbar_content--left">
                <div className="navbar_content--left_content">
                    <h3 className="navbar_content--left_content-logo">Dsa</h3>
                </div>
            </div>
            <div className="navbar_content--right">
                <div className="navbar_content--right_content">
                    <div className="home_page"></div>
                    <div className="message_page"></div>
                </div>
            </div>
          </div>
      </div>
  </div>;
}

export default NavBar;
