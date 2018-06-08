import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequestCollection from './Components/RequestCollection';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import MapContainer from './Components/MapContainer'

// UI
import { Container, Row, Col, Navbar, Nav, NavbarBrand, NavItem, NavLink, Collapse} from 'reactstrap';

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
          <Navbar color="light" lgiht expand="md">
            <NavbarBrand href="#"> Rice Safety </NavbarBrand>
            <Collapse isOpen={false} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem> 
                  <NavLink href="#">
                    Link # 1 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    Link # 2
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Container>
            <Row>
              <Col xs="4">
                <RequestCollection requests={this.state.requests} />
              </Col> 
              <Col xm="8">
                <MapContainer google={this.props.google} requests={this.state.requests} />
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRkw7Lzkby2rK2AWoEenHlX_RQ19A_Hp0',
})(App)
