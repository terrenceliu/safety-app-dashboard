import React, { Component } from 'react';

import RequestItem from './RequestItem';

class RequestCollection extends Component {
<<<<<<< HEAD
  
  render() {
    let requestItems;

    if (this.props.requests) {
      requestItems = this.props.requests.map(req => {
        console.log(req);
        return (
          <RequestItem key={req.request_id} request={req}/>
=======

  

  render() {
    let requestItems;
    
    if (this.props.requests) {
      requestItems = this.props.requests.map(req => {
        return (
          <RequestItem key={req._id} request={req}/>
>>>>>>> 5055466436027e787c47f5eaf24e01c2f20e2643
        );
      })
    }


    return (
      <div>
        <h3> Active Requests </h3>
        {requestItems}
      </div>
    );
  }
}

export default RequestCollection;
