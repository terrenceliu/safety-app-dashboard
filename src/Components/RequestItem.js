import React, { Component } from 'react';


class RequestItem extends Component {
  render() {
    return (
      <li className="Request">
        <strong> UUID </strong>: {this.props.request.uuid}, 
        <strong> case_id </strong>: {this.props.request.case_id}, 
        <strong>request_id </strong>: {this.props.request.request_id},
        <strong> lat_lon </strong>: ({this.props.request.latitude}, {this.props.request.longitude})
      </li>
    );
  }
}

export default RequestItem;
