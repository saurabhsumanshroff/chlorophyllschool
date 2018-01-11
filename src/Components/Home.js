import React, { Component } from 'react';
import BannerCarousel from './BannerCarousel.js';
import Marquee from './Marquee.js';
import PrincipalMessage from './PrincipalMessage.js';
import OurSchool from './OurSchool.js';
import PhotoGallery from './PhotoGallery.js';
import '../Stylesheets/Home.css';
import {calenderText, loginText, schoolNews} from '../Resources/Text.js';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <BannerCarousel />
        <div className="row loginCalendarNews">
          <div className="calender col-sm-3">
            <span className="calenderIcon glyphicon glyphicon-calendar"></span>
            <p>{calenderText}</p>
          </div>
          <div className="login col-sm-3">
            <span className="loginIcon glyphicon glyphicon-log-in"></span>
            <p>{loginText}</p>
          </div>
          <div className="col-sm-6 newsTile">
            <div className="newsVerticalScroll">
              <h2>{schoolNews}</h2>
              <Marquee />
            </div>
          </div>
        </div>
        <PrincipalMessage />
        <OurSchool />
        <PhotoGallery />
      </div>
    );
  }
}

export default Home;
