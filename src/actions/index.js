import axios from 'axios'
import { UNAUTH_USER, AUTH_USER, AUTH_ERROR, FETCH_MESSAGE, FETCH_CITIES, FETCH_CURRENT_CITY } from './types'
import config from '../.././config'

const API_KEY = config.weatherKey
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
const ROOT_URL = 'http://localhost:3090'

export function signinUser({email, password}) {

  return function (dispatch) {

    // submit email and password to server
    const request = axios.post(`${ROOT_URL}/signin`, {email, password})
    request
      .then(response => {
        // -Save the JWT token
        localStorage.setItem('token', response.data.token)

        // -if request is good, we need to update state to indicate user is authenticated
        dispatch({type: AUTH_USER})
      })

      // If request is bad...
      // -Show an error to the user
      .catch(() => {
        dispatch(authError('bad login info'))
      })

  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}

export function signupUser({email, password, passwordConfirmation}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password, passwordConfirmation})
      .then(response => {
        dispatch({type: AUTH_USER})
        localStorage.setItem('token', response.data.token)
      })
      .catch(({response}) => {
        dispatch(authError(response.data.error))
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function fetchMessage() {
  return function (dispatch) {
    axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}

export function fetchCurrentWeather(arg) {
  const requestGeoIp = axios.get('http://freegeoip.net/json/');
  return (dispatch) => {
    requestGeoIp.then((response) => {
      const coords = response;
      const lat = coords.data.latitude;
      const lon = coords.data.longitude;
      const url = `${WEATHER_URL}&lat=${lat}&lon=${lon}`;
      const requestWeather = axios.get(url);
      requestWeather.then((weatherResponse) => {
        dispatch({
          type: FETCH_CURRENT_CITY,
          payload: weatherResponse
        })
      })
    });
  }
}
