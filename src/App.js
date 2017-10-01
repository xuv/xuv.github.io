import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Profile } from 'xuv-components';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="column" >
        <Profile user = "xuv" />
      </Container>
    );
  }
}

export default App;
