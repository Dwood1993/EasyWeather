import React, { Component } from 'react';
import Sun from './animations';
import WeatherDisplay from './weather_display';


export default class App extends Component {


  render() {
    return (
      <div>
        <Sun />
        <WeatherDisplay />
      </div>
    );
  }
}
