import React, { Component } from 'react';
import BannerCarousel from './BannerCarousel.js';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <BannerCarousel />
      </div>
    );
  }
}

export default Home;
