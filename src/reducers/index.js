import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import weatherReducer from "./weather_reducer";

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  weather: weatherReducer
});

export default rootReducer;
