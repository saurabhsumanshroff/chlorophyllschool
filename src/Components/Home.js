import React, { Component } from 'react';
import BannerCarousel from './BannerCarousel.js';
import Marquee from './Marquee.js';
import PrincipalMessage from './PrincipalMessage.js';
import '../Stylesheets/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <BannerCarousel />
        <div className="row loginCalendarNews">
          <div className="calender col-sm-3">
            <span className="calenderIcon glyphicon glyphicon-calendar"></span>
            <p> Calender Events </p>
          </div>
          <div className="login col-sm-3">
            <span className="loginIcon glyphicon glyphicon-log-in"></span>
            <p> Login </p>
          </div>
          <div className="col-sm-6 newsTile">
            <div className="newsVerticalScroll">
              <h2>School News</h2>
              <Marquee />
            </div>
          </div>
        </div>
        <PrincipalMessage />
      </div>
    );
  }
}

export default Home;
