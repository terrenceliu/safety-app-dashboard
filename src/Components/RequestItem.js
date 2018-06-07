import React, { Component } from 'react';


class RequestItem extends Component {
  render() {
    return (
      <div className="Request">
        <strong>request_id </strong>: {this.props.request._id},
        <strong> lat_lon </strong>: ({this.props.request.latitude}, {this.props.request.longitude})
      </div>
    );
  }
}

export default RequestItem;
