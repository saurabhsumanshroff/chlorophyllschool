import React, { Component } from 'react';
import '../Stylesheets/PrincipalMessage.css';
import {Image} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';
import PrincipalImage from '../Resources/principal.jpg';
import {principalName, principalMessage, principalMessageHeading} from '../Resources/Text.js';

class PrincipalMessage extends Component {
  render() {
    return (
      <div className="principalMessage">
        <div className="message">
          <h1>{principalMessageHeading}</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Image src={PrincipalImage} responsive />
            <h3>{principalName}</h3>
            <p>(Principal)</p>
          </div>
          <div className="col-sm-8">
            <Carousel id="principalMessageCarousel" >
              <Carousel.Item>
                <p>{principalMessage[0]}</p>
              </Carousel.Item>
              <Carousel.Item>
                <p>{principalMessage[1]}</p>
              </Carousel.Item>
              <Carousel.Item>
                <p>{principalMessage[2]}</p>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalMessage;
