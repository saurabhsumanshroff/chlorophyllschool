import React, { Component } from 'react';
import BannerCarousel from './BannerCarousel.js';
import Marquee from './Marquee.js';
import OurSchool from './OurSchool.js';
import DirectorsDesk from './DirectorsDesk.js';
import PrincipalsDesk from './PrincipalsDesk.js';
import '../Stylesheets/Home.css';
import {calenderText, loginText, schoolNews} from '../Resources/Text.js';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <BannerCarousel />
        <div className="row directorPrincipalNews">
          <div className="director col-sm-4">
            <DirectorsDesk />
          </div>
          <div className="principal col-sm-4">
            <PrincipalsDesk />
          </div>
          <div className="col-sm-4 newsTile">
            <div className="newsVerticalScroll">
              <h2>{schoolNews}</h2>
              <Marquee />
            </div>
          </div>
        </div>
        <OurSchool />
      </div>
    );
  }
}

export default Home;
