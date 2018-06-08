import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


class RequestItem extends Component {
  render() {
    return (
      <ListGroupItem className="Request">
        {this.props.request._id}, ({this.props.request.latitude}, {this.props.request.longitude})
      </ListGroupItem>
    );
  }
}

export default RequestItem;
