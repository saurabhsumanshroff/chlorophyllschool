import React, { Component } from 'react';
import '../Stylesheets/PrincipalMessage.css';
import {Image} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';
//import PrincipalImage from '../Resources/principal.jpg';
//import {principalName, principalMessage} from '../Resources/Text.js';

class PrincipalDirectorMessage extends Component {

  render() {
    if(this.props.message === undefined) {
      return null;
    }
    else {
      return (
        <div className="principalMessage">
          <div className="row">
            <div className="col-sm-4">
              <Image src={this.props.img} responsive />
              <h3>{this.props.name}</h3>
              <p>(Principal)</p>
            </div>
            <div className="col-sm-8">
              <Carousel id="principalMessageCarousel" >
                <Carousel.Item>
                  <p>{this.props.message[0]}</p>
                </Carousel.Item>
                <Carousel.Item>
                  <p>{this.props.message[1]}</p>
                </Carousel.Item>
                <Carousel.Item>
                  <p>{this.props.message[2]}</p>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PrincipalDirectorMessage;
