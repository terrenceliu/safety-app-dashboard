import React, { Component } from 'react';
import './App.css';

// SocketIO
import openSocket from 'socket.io-client';

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Component
import MapContainer from './Components/MapContainer'
import RequestCollection from './Components/RequestCollection';
import Sidebar from './Components/Sidebar/Sidebar';
import dashboardRoutes from './Routes/dashboardRoutes';

// import styles
import {
  drawerWidth,
  transition,
  container
} from "./Assets/jss/dashboard-main";

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    width: `calc(100% - ${drawerWidth}px)`,
    overflow: "auto",
    position: "relative",
    float: "right",
    transition,
    maxHeight: "100%"
  },
  content: {
    marginTop: "40px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  container,
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      requests: undefined,
      req_map: undefined      // Only keeps one request per case? (Latest request)
    };

    // Open Socket
    this.socket = openSocket("http://localhost:8000");
    this.initSocket();

  }
  
  updateReqMap = () => {
    let req = this.state.requests;
    
    var req_map = {}

    for(var i = 0; i < req.length; i++) {
      if (!(req[i].case_id in req_map)) {
        // Empty entry
        req_map[req[i].case_id] = req[i];
      } else {
        // Update with most recent request
        if ( Date(req[i].timestamp) > Date(req_map[req[i].case_id].timestamp) ) {
          req_map[req[i].case_id] = req[i]
        }
      }
    }
    
    // Convert Object to an array of objects
    var res = Object.values(req_map);
    
    this.setState({
      req_map: res
    });
  }

  initSocket = () => {
    // Update request from server
    this.socket.on('request-update', (data) => {
      let case_id = data.case_id
      let req_map = this.state.req_map;

      // console.log(data);

      let found_flag = false;
      for (var i = 0; i < req_map.length; i++) {
        if (req_map[i].case_id == case_id) {
          // Update request
          req_map[i].latitude = data.latitude;
          req_map[i].longitude = data.longitude;
          req_map[i].timestamp = data.timestamp;
          found_flag = true;
        }
      }

      if (!found_flag) {
        let req = {
          case_id: "" + data.case_id,
          timestamp: "",
          latitude: 0.0 + data.latlng.lat,
          longitude: 0.0 + data.latlng.lng
        }
        req_map.push(req);
        console.log(req);
      }

      this.setState({
        req_map: req_map
      });



    });
  };

  componentDidMount() {
    // const api_addr = "https://safety-server.herokuapp.com/api/req";
    
    // const api_addr = "http://localhost:8000/api/req";

    // // Open Socket
    // this.initSocket();
    
    // // Fetch Data
    // fetch(api_addr, {
    //   method: 'GET'
    // })
    // .then(res => res.json())
    // .then(data => {
    //   // console.log(data.slice(0, 20));
    //   console.log(data.length);
    //   this.setState({
    //     requests: data.slice() 
    //   });
    // })
    // .then(() => {
    //   this.updateReqMap();
    // });
  }
  
  render() {
    const { classes } = this.props;

    const switchRoutes = (
      <Switch>
        {dashboardRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    );

    return (
      <Router>
        <div className={classes.wrapper}>
            <Sidebar
              routes={dashboardRoutes}
            />
          <div className={classes.mainPanel}>
            <div className={classes.content}>
              <div className={classes.container}>
                {switchRoutes}
              </div>
            </div>
          </div>
        </div>
      </Router>


      // <div>
      //   <RequestCollection requests={this.state.req_map} />
      //   <MapContainer google={this.props.google} requests={this.state.req_map} />
      // </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRkw7Lzkby2rK2AWoEenHlX_RQ19A_Hp0',
})(withStyles(styles)(App));
