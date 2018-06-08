import React, { Component } from 'react';


class RequestItem extends Component {
  render() {
    return (
<<<<<<< HEAD
      <li className="Request">
        <strong> UUID </strong>: {this.props.request.uuid}, 
        <strong> case_id </strong>: {this.props.request.case_id}, 
        <strong>request_id </strong>: {this.props.request.request_id},
        <strong> lat_lon </strong>: ({this.props.request.latitude}, {this.props.request.longitude})
      </li>
=======
      <div className="Request">
        <strong>request_id </strong>: {this.props.request._id},
        <strong> lat_lon </strong>: ({this.props.request.latitude}, {this.props.request.longitude})
      </div>
>>>>>>> 5055466436027e787c47f5eaf24e01c2f20e2643
    );
  }
}

export default RequestItem;
