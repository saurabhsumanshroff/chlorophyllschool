import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Logo</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <li role="presentation"><a href='/Home'>Home</a></li>
              <li role="presentation"><a href='/Results'>Results</a></li>
              <li role="presentation"><a href='/#/AboutUs'>About Us</a></li>
              <li role="presentation"><a href='/Messages'>Messages</a></li>
              <li role="presentation"><a href='/Gallery'>Gallery</a></li>
              <li role="presentation"><a href='/Achievements'>Achievements</a></li>
              <li role="presentation"><a href='/Prospectus'>Prospectus</a></li>
              <li role="presentation"><a href='/NoticeBoard'>Notice Board</a></li>
              <li role="presentation"><a href='/Downloads'>Downloads</a></li>
              <li role="presentation"><a href='/ContactUs'>Contact Us</a></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
