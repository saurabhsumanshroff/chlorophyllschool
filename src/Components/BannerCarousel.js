import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import carousel from '../Resources/carousel.jpg';
import {bannerCarouselLabel} from '../Resources/Text.js';
import {bannerCarouselSubLabel} from '../Resources/Text.js';
import '../Stylesheets/BannerCarousel.css';

class Header extends Component {
  render() {
    return (
      <Carousel id="bannerCarousel" data-ride="carousel">
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={carousel} />
          <Carousel.Caption>
            <h3>{bannerCarouselLabel[0]}</h3>
            <p>{bannerCarouselSubLabel[0]}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={carousel} />
          <Carousel.Caption>
            <h3>{bannerCarouselLabel[1]}</h3>
            <p>{bannerCarouselSubLabel[1]}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={carousel} />
          <Carousel.Caption>
            <h3>{bannerCarouselLabel[2]}</h3>
            <p>{bannerCarouselSubLabel[2]}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Header;
