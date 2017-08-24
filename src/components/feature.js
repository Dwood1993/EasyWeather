import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class Feature extends Component {

  componentWillMount() {
    this.props.fetchMessage()
  }

  render() {
    return (
      <div>
        <p><strong>This is where the signed in users will go!</strong></p>
        <br/>
        <p>Here's a secret response from the server that your token returned:</p>

        <p>{this.props.message}</p>

        <br/>
        <p>Notice that clicking these links redirect to the homepage, because you are already signed in</p>
        <p>
          <Link to={'/signin'}>/signin</Link> | <Link to={'/signup'}>/signup</Link>
        </p>
      </div>

   );
 }
}

function mapStateToProps(state) {
  return {
    message: state.auth.message
  }
}

export default connect(mapStateToProps, actions)(Feature);
