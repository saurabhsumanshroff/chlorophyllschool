import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import '../Stylesheets/Footer.css';
import {footerCarouselMessage, copyrightText} from '../Resources/Text.js';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="col-sm-8">
            <Carousel id="footerCarousel" >
              <Carousel.Item>
                <p>{footerCarouselMessage[0]}</p>
              </Carousel.Item>
              <Carousel.Item>
                <p>{footerCarouselMessage[1]}</p>
              </Carousel.Item>
              <Carousel.Item>
                <p>{footerCarouselMessage[2]}</p>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-sm-4 download-app">
            <h5>Copyright wala image</h5>
            <div className="app-box">
              <a href="javascript:void(0)"><img alt="" src="images/google-play.png" /></a>
              <a href="javascript:void(0)"><img alt="" src="images/apple.png" /></a>
              <a href="javascript:void(0)"><img alt="" src="images/windows.png" /></a>
            </div>
          </div>
        </div>
        <div className="copyright">
          {copyrightText}
        </div>
      </div>
    );
  }
}

export default Footer;
