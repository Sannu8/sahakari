import React, { Component } from 'react';
import './Css/HomePage.css';

class HomePage extends Component {
  render() {


    return (

      <div className="slideshow-container">

        <div className="mySlides fade">

          <img src="https://i.imgur.com/ol2EmEU.jpg" className="slideImages"  />
            <div className="text">Banner</div>
       </div>

        <div className="mySlides fade">

          <img src="mngdirector.jpg" />
          <div className="text">Managing Director</div>
        </div>

        <div className="mySlides fade">

          <img src="event1.jpg"  />
          <div className="text">Event1</div>
        </div>

        <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
        <a className="next" onClick="plusSlides(1)">&#10095;</a>

     </div>
    )
  }
}

export default HomePage;
