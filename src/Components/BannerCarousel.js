import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import carousel from '../Resources/carousel.jpg';

class Header extends Component {
  render() {
    return (
      <Carousel id="bannerCarousel" data-ride="carousel">
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={carousel} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Any Text-1 you want to display</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={carousel} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Any Text-2 you want to display.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={carousel} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Any Text-3 you want to display</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Header;
