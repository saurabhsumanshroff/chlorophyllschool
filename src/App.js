import React, { Component } from 'react';
import './App.css';
import {Route, HashRouter} from "react-router-dom";
import Header from './Components/Header.js';
import AboutUs from './Components/AboutUs.js';
import Achievements from './Components/Achievements.js';
import ContactUs from './Components/ContactUs.js';
import Downloads from './Components/Downloads.js';
import Gallery from './Components/Gallery.js';
import Messages from './Components/Messages.js';
import NoticeBoard from './Components/NoticeBoard.js';
import Prospectus from './Components/Prospectus.js';
import Results from './Components/Results.js';
import Home from './Components/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HashRouter>
          <div className="App-body">
            <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/AboutUs" component={AboutUs}/>
             <Route path="/Achievements" component={Achievements}/>
             <Route path="/ContactUs" component={ContactUs}/>
             <Route path="/Downloads" component={Downloads}/>
             <Route path="/Gallery" component={Gallery}/>
             <Route path="/Messages" component={Messages}/>
             <Route path="/NoticeBoard" component={NoticeBoard}/>
             <Route path="/Prospectus" component={Prospectus}/>
             <Route path="/Results" component={Results}/>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
