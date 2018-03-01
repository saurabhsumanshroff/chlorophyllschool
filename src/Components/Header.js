import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../Stylesheets/Header.css';
import {navigationFields} from '../Resources/Text.js';

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
              <li className="navItem" role="presentation"><a className="navItemText" href='/'>{navigationFields[0]}</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/#/Results'>{navigationFields[1]}</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/#/AboutUs'>{navigationFields[2]}</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/#/Messages'>{navigationFields[3]}</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/#/Gallery'>{navigationFields[4]}</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/#/Achievements'>{navigationFields[5]}</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/#/Prospectus'>{navigationFields[6]}</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/#/NoticeBoard'>{navigationFields[7]}</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/#/Downloads'>{navigationFields[8]}</a></li>
              <li className="navItem" role="presentation"><a className="navItemText" href='/#/ContactUs'>{navigationFields[9]}</a></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
