import React, { Component } from 'react';
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
    );
  }
}

export default App;
