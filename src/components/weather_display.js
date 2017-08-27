import React, { Component } from 'react';
import { connect } from "react-redux";
import '.././styles/data.css';
import * as actions from '.././actions';

class weatherDisplay extends Component {

  componentWillMount() {
    this.props.fetchCurrentWeather()
  }

  // renderWeather() {
  //   const temp = this.props.temp;
  //
  //   return (
  //     <tr key={temp}>
  //       {/* <td>{name}</td> */}
  //       <td>{temp}</td>
  //       {/* <td>{pressures}</td>
  //       <td>{humidities}</td> */}
  //     </tr>
  //   );
  // }

render () {
  const city = this.props.weather.city;
  const temp = this.props.weather.temp;
  const maxTemp = this.props.weather.max;
  const minTemp = this.props.weather.min;
  const humidity = this.props.weather.humidity

return (
      <table className="data table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Max Temperature</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{city}</td>
            <td>{temp}</td>
            <td>{maxTemp}</td>
            <td>{humidity}</td>
          </tr>
        </tbody>
      </table>
            );
          }
        }

function mapStateToProps({ weather }) {
              return { weather };
            }

export default connect(mapStateToProps, actions)(weatherDisplay);
