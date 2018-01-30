import React, { Component } from 'react';
import './Css/App.css';

class Gallery extends Component {
  render() {
    return(
      <div>
      <img src = "https://i.imgur.com/T40J2f3.png" alt= "logo" className="gallery"   />
    <img src = "https://i.imgur.com/M8TAb17.jpg" alt = "banner" className="gallery"   />
    <img src = "https://i.imgur.com/4KLMy94.jpg" alt = "boardofdirectors" className="gallery"   />
    <img src = "mngdirector.jpg" alt= "logo" className="gallery"   />
    <img src = "event1.jpg" alt= "logo" className="gallery"   />
    <img src = "event2.jpg" alt= "logo" className="gallery"   />
    <img src = "event3.jpg" alt= "logo" className="gallery"   />
      </div>
    )
  }
}

export default Gallery;
