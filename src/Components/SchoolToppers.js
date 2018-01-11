import React, { Component } from 'react';
import '../Stylesheets/SchoolToppers.css';
import {Image} from 'react-bootstrap';
import StudentImage from '../Resources/student1.jpg';
import {schoolToppersHeading} from '../Resources/Text.js';

class SchoolToppers extends Component {
  render() {
    return (
      <div className="schoolToppers">
        <div className="heading">
          <h1>{schoolToppersHeading}</h1>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <h3 class="className"> Std V </h3>
            <Image src={StudentImage} alt="student" />
            <h3 class="studentName"> Vishakha Agarwal </h3>
            <h4 class="marks"> 92% </h4>
            <h3 class="className"> Std I </h3>
            <Image src={StudentImage} alt="student" />
            <h3 class="studentName"> Vishakha Agarwal </h3>
            <h4 class="marks"> 92% </h4>
          </div>
          <div className="col-sm-3">
            <h3 class="className"> Std IV </h3>
            <Image src={StudentImage} alt="student" />
            <h3 class="studentName"> Vishakha Agarwal </h3>
            <h4 class="marks"> 92% </h4>
            <h3 class="className"> Std LKG </h3>
            <Image src={StudentImage} alt="student" />
            <h3 class="studentName"> Vishakha Agarwal </h3>
            <h4 class="marks"> 92% </h4>
          </div>
          <div className="col-sm-3">
            <h3 class="className"> Std III </h3>
            <Image src={StudentImage} alt="student" />
            <h3 class="studentName"> Vishakha Agarwal </h3>
            <h4 class="marks"> 92% </h4>
            <h3 class="className"> Std UKG </h3>
            <Image src={StudentImage} alt="student" />
            <h3 class="studentName"> Vishakha Agarwal </h3>
            <h4 class="marks"> 92% </h4>
          </div>
          <div className="col-sm-3">
            <h3 class="className"> Std II </h3>
            <Image src={StudentImage} alt="student" />
            <h3 class="studentName"> Vishakha Agarwal </h3>
            <h4 class="marks"> 92% </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default SchoolToppers;
