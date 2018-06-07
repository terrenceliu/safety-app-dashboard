import React, { Component } from 'react';

import RequestItem from './RequestItem';

class RequestCollection extends Component {

  

  render() {
    let requestItems;
    
    if (this.props.requests) {
      requestItems = this.props.requests.map(req => {
        return (
          <RequestItem key={req._id} request={req}/>
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
