import React, { Component } from 'react';
<<<<<<< HEAD
// import uuid from 'uuid/v4';
import './App.css';
import RequestCollection from './Components/RequestCollection'

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      requests: undefined
    }
  }

  async componentDidMount() {
    console.log('Did mount.')
    
    const response = await fetch("https://safety-server.herokuapp.com/api/req");

    const data = await response.json()
    
    console.log(data)
  }


  render() {
    return (
      <div className="App">
        <RequestCollection requests={this.state.requests} />
      </div>
=======
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
>>>>>>> 5055466436027e787c47f5eaf24e01c2f20e2643
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRkw7Lzkby2rK2AWoEenHlX_RQ19A_Hp0',
})(App)
>>>>>>> 5055466436027e787c47f5eaf24e01c2f20e2643
