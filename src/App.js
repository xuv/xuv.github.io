import React, { Component } from 'react';
import { Profile } from 'xuv-components';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data : ""
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/' + this.props.user)
      .then((response) => {
        let data = response.data;
        this.setState({ data });
      }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Profile data={ this.state.data } />
      </div>
    );
  }
}

export default App;
