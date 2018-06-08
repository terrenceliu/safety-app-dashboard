import React, { Component } from 'react';
import './App.css';
import RequestCollection from './Components/RequestCollection';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import MapContainer from './Components/MapContainer'

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
        <div className="App">
          <RequestCollection requests={this.state.requests} />
          <MapContainer google={this.props.google} requests={this.state.requests} />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRkw7Lzkby2rK2AWoEenHlX_RQ19A_Hp0',
})(App)
