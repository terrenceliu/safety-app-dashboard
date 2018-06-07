import React, { Component } from 'react';
import './App.css';
import './assets/react-toolbox/theme.css';
import RequestCollection from './Components/RequestCollection';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import MapContainer from './Components/MapContainer'

// UI
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Button from 'react-toolbox/lib/button/Button';

class App extends Component {
  state = {
    requests: undefined
  }

  componentDidMount() {
    const api_addr = "https://safety-server.herokuapp.com/api/req";

    fetch(api_addr).then(res => res.json()).then(res => {

      this.setState({ requests: res.slice(0, 20) });
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button icon='bookmark' label='TestIcon' raised primary />
          <RequestCollection requests={this.state.requests} />
          <MapContainer google={this.props.google} requests={this.state.requests} />
        </div>
      </ThemeProvider>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRkw7Lzkby2rK2AWoEenHlX_RQ19A_Hp0',
})(App)
