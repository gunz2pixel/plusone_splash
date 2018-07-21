import React, { Component } from 'react';
import './stylesheet/splash.css';


class App extends Component {

  render() {
    return (

        <div className="splash">
          <div className="header">
            <div className="icon"></div>
          </div>
          <div className="content-box -msize -flexend">
            <div className="title">PLUSONE</div>
          </div>
          <div className="content-box -s3size -flexstart -topm">
            <div className="sub-title">Community for play sport together.</div>
          </div>
          <div className="content-box -s3size -flexend -tophalf">
            <div className="button -alizarin">Get Start.</div>
          </div>
          <div className="background -image">
            <div className="cover"></div>
          </div>
        </div>

      
    );
  }
}

export default App;
