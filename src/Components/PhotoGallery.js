import React, { Component } from 'react';
import '../Stylesheets/PhotoGallery.css';
import {Image} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';
import Image1 from '../Resources/1.jpg';
import Image2 from '../Resources/2.jpg';
import Image3 from '../Resources/3.jpg';
import Image4 from '../Resources/4.jpg';
import Image5 from '../Resources/5.jpg';
import Image6 from '../Resources/6.jpg';
import Image7 from '../Resources/7.jpg';
import Image8 from '../Resources/8.jpg';
import Image9 from '../Resources/9.jpg';
import Image10 from '../Resources/10.jpg';
import Image11 from '../Resources/11.jpg';
import Image12 from '../Resources/12.jpg';
import Image13 from '../Resources/13.jpg';
import Image14 from '../Resources/14.jpg';
import Image15 from '../Resources/15.jpg';
import Image16 from '../Resources/16.jpg';
import Image17 from '../Resources/17.jpg';
import Image18 from '../Resources/18.jpg';
import Image19 from '../Resources/19.jpg';
import Image20 from '../Resources/20.jpg';
import Image21 from '../Resources/21.jpg';
import Image22 from '../Resources/22.jpg';
import Image23 from '../Resources/23.jpg';
import Image24 from '../Resources/24.jpg';
import {photoGalleryHeading} from '../Resources/Text.js';

class PhotoGallery extends Component {
  render() {
    return (
      <div className="photoGallery">
        <div className="message">
          <h1>{photoGalleryHeading}</h1>
        </div>
        <Carousel id="photoGalleryCarousel" >
          <Carousel.Item>
            <div className="row">
              <div className="col-sm-3">
                <Image src={Image1} responsive />
                <Image src={Image2} responsive />
              </div>
              <div className="col-sm-3">
                <Image src={Image3} responsive />
                <Image src={Image4} responsive />
              </div>
              <div className="col-sm-3">
                <Image src={Image5} responsive />
                <Image src={Image6} responsive />
              </div>
              <div className="col-sm-3">
                <Image src={Image7} responsive />
                <Image src={Image8} responsive />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-sm-3">
                <Image src={Image9} responsive />
                <Image src={Image10} responsive />
              </div>
              <div className="col-sm-3">
                <Image src={Image11} responsive />
                <Image src={Image12} responsive />
              </div>
              <div className="col-sm-3">
                <Image src={Image13} responsive />
                <Image src={Image14} responsive />
              </div>
              <div className="col-sm-3">
                <Image src={Image15} responsive />
                <Image src={Image16} responsive />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-sm-3">
                <Image src={Image17} responsive />
                <Image src={Image18} responsive />
              </div>
              <div className="col-sm-3">
                <Image src={Image19} responsive />
                <Image src={Image20} responsive />
              </div>
              <div className="col-sm-3">
                <Image src={Image21} responsive />
                <Image src={Image22} responsive />
              </div>
              <div className="col-sm-3">
                <Image src={Image23} responsive />
                <Image src={Image24} responsive />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default PhotoGallery;
