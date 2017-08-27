import React, { Component } from "react";
import '.././styles/sun.css';
import '.././styles/clouds.css';

export default class weatherAnimations extends Component {
 render() {
  return (
    <div className="weatherBox">
      <div className="sun">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="cloud">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="words">
        <span>EasyWeather</span>
      </div>
    </div>
  );
}
}
