import { FETCH_CURRENT_CITY } from "../actions/types";


const INITIAL_STATE = { location: {}, temp: null, weather: null };

export default function( state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CURRENT_CITY:
    console.log('Received2:', action.payload);
    // return {...state, action.payload.data};
    return { ... state,
      city: action.payload.data.name,
      temp: action.payload.data.main.temp,
      weather: action.payload.data.weather[0].main,
      humidity: action.payload.data.main.humidity,
      min: action.payload.data.main.temp_min,
      max: action.payload.data.main.temp_max,
      windSpeed: action.payload.data.wind.speed
    };
    default: //no default
  }
  return state;
}
