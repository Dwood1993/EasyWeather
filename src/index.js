import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';// need to install
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';// need to install

import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import { PrivateRoute } from './components/auth/require_auth';
import Feature from './components/feature';
import{ AUTH_USER } from './actions/types';
import App from './components/app';
import Header from './components/header';
import reducers from './reducers';


// 'react-tap-event-plugin' needed for onTouchTap with material-ui
// 'InjectTapEventPlugin' needed for onTouchTap with material-ui http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store  = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token')

if (token) {
  store.dispatch({type: AUTH_USER})
}


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <div>
          <Header/>
          <Route path="/" exact={true} component={App} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/feature" component={Feature}/>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>,
    document.getElementById('root')
);
