import React, { Component } from 'react';
import '../Stylesheets/OurSchool.css';
import {Image} from 'react-bootstrap';
import SchoolImage from '../Resources/our-school.jpg';
import {ourSchoolHeading, schoolMessage} from '../Resources/Text.js';

class OurSchool extends Component {
  render() {
    return (
      <div className="ourSchool">
        <div className="message">
          <h1>{ourSchoolHeading}</h1>
        </div>
        <div className="row">
          <div className="schoolImage col-sm-6">
            <Image src={SchoolImage} responsive />
          </div>
          <div className="schoolMessage col-sm-6">
            <p>{schoolMessage}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OurSchool;
