import React, { Component } from 'react';
import './App.css';

// import Component
import MapContainer from './Components/MapContainer'
import RequestCollection from './Components/RequestCollection';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'

// import ui



class App extends Component {
  state = {
    requests: undefined
  }

  componentDidMount() {
    const api_addr = "https://safety-server.herokuapp.com/api/req";
    
    fetch(api_addr, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.slice(0, 20));
      this.setState({
        requests: data.slice(0, 20) 
      });
    })
    .then(() => console.log(this.state.requests));
  }
  
  render() {
    return (
        <div>
          <RequestCollection requests={this.state.requests} />
          <MapContainer google={this.props.google} requests={this.state.requests} />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRkw7Lzkby2rK2AWoEenHlX_RQ19A_Hp0',
})(App)
