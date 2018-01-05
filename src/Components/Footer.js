import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import '../Stylesheets/Footer.css';
import carousel from '../Resources/carousel.jpg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Carousel id="footerCarousel" >
          <Carousel.Item>
            <p>Any Text-1 you want to display</p>
          </Carousel.Item>
          <Carousel.Item>
            <p>Any Text-2 you want to display.</p>
          </Carousel.Item>
          <Carousel.Item>
            <p>Any Text-3 you want to display</p>
          </Carousel.Item>
        </Carousel>
        <div className="copyright">
          © copyright 2017 all rights reserved by, Chlorophyll School, Jhumri Telaiya
        </div>
      </div>
    );
  }
}

export default Footer;
