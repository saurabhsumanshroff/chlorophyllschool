import React, { Component } from 'react';
import BannerCarousel from './BannerCarousel.js';
import Marquee from './Marquee.js';
import '../Stylesheets/Home.css';
import CalendarIcon from '../Resources/calendar-icon.png';
import LoginIcon from '../Resources/portal-login-icon.png';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <BannerCarousel />
        <div className="row loginCalendarNews">
          <div className="col-sm-3 calenderIcon">
            <img alt="Login" src={CalendarIcon} />
            <p> Calender Events </p>
          </div>
          <div className="col-sm-3 loginIcon">
            <img alt="Login" src={LoginIcon} />
            <p> Login </p>
          </div>
          <div className="col-sm-6 newsTile">
            <div className="newsVerticalScroll">
              <h2>School News</h2>
              <Marquee />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
