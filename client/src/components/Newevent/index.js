import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";

class newevent extends Component {
  state = {
    event: {}
  };
  // When this component mounts, grab the event with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getEvent(this.props.match.params.id)
      .then(res => this.setState({ event: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <ul>
                <li>{this.state.event.title}</li> 
                <li> {this.state.event.date}</li>
                <li> {this.state.event.start_time}</li>
                <li> {this.state.event.street_address}</li>
            </ul>
            </Jumbotron>
          </Col>
        </Row>
       </Container>
    );
  }
}

export default newevent;