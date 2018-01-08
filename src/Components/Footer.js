import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import '../Stylesheets/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="col-sm-8">
            <Carousel id="footerCarousel" >
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
          © copyright 2017 all rights reserved by, Chlorophyll School, Jhumri Telaiya
        </div>
      </div>
    );
  }
}

export default Footer;
