import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../Stylesheets/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Logo</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <li className="navItem" role="presentation"><a className="navItemText" href='/Home'>Home</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/Results'>Results</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/#/AboutUs'>About Us</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/Messages'>Messages</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/Gallery'>Gallery</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/Achievements'>Achievements</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/Prospectus'>Prospectus</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/NoticeBoard'>Notice Board</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/Downloads'>Downloads</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/ContactUs'>Contact Us</a></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
