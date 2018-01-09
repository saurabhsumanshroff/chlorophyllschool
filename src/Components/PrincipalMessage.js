import React, { Component } from 'react';
import '../Stylesheets/PrincipalMessage.css';
import {Image} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';
import PrincipalImage from '../Resources/principal.jpg';

class PrincipalMessage extends Component {
  render() {
    return (
      <div className="principalMessage">
        <div className="message">
          <h1>PRINCIPAL'S MESSAGE</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <Image src={PrincipalImage} responsive />
            <h3>Fr Kurian Thrikkodanmalil TOR </h3>
            <p>(Principal)</p>
          </div>
          <div className="col-sm-8">
            <Carousel id="principalMessageCarousel" >
              <Carousel.Item>
                <p>Any Text-1 you want to displayAny Text-1 you want to displayAny Text-1 you want to displayAny Text-1 you want to display</p>
              </Carousel.Item>
              <Carousel.Item>
                <p>Any Text-1 you want to displayAny Text-2 you want to displayAny Text-1 you want to displayAny Text-1 you want to display</p>
              </Carousel.Item>
              <Carousel.Item>
                <p>Any Text-1 you want to displayAny Text-3 you want to displayAny Text-1 you want to displayAny Text-1 you want to display</p>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalMessage;
