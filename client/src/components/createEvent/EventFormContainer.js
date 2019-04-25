import React, { Component } from 'react';

/* Import Components */
import Input from '../EventInput/Input';
import Button from '../buttons/Button';
import "./EventFormContainer.css";
import API from "../../utils/API";
// import Input from "../components/Form";


class EventFormContainer extends Component {
 

    state = {
      newEvent: [],
      title: "",
      date: "",
      start_time: "",
      street_address: ""
    };

    componentDidMount() {
      this.loadEvents();
    }

    loadEvents = () => {
      API.getEvents()
        .then(res =>
          this.setState({ events: res.data, title: "", date: "", start_time: "", street_address: "" })
        )
        .catch(err => console.log(err));
    };
  
    deleteEvent = id => {
      API.deleteEvent(id)
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.date && this.state.start_time && this.state.street_address) {
      API.saveEvent({
        title: this.state.title,
        date: this.state.date,
        start_time: this.state.start_time,
        street_address: this.state.street_address
      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };

  handleClearForm = event => {
    event.preventDefault();
    this.setState({
      newEvent: {
        title: "",
        date: "",
        start_time: "",
        street_address: ""
      }
    });
  };

  render() {
    return (

      <form className="container-fluid" onSubmit={this.handleFormSubmit}>

        <Input inputtype={'text'}
          title={'Event Title'}
          name={'title'}
          value={this.state.newEvent.title}
          placeholder={'Name of Event (Required)'}
          onChange={this.handleInputChange}
        />

        <Input inputtype={'text'}
          title={'Event Date'}
          name={'date'}
          value={this.state.newEvent.date}
          placeholder={'example: 11/17/19 (Required)'}
          onChange={this.handleInputChange}
        />

        <Input inputtype={'text'}
          name={'start_time'}
          title={'Time of Event'}
          value={this.state.newEvent.start_time}
          placeholder={'example: 9:00am (Required)'}
          onChange={this.handleInputChange}
        />

        <Input inputtype={'text'}
          name={'street_address'}
          title={'Location of Event'}
          value={this.state.newEvent.street_address}
          placeholder={'example: 1365 W Warner Rd (Required)'}
          onChange={this.handleInputChange}
        />

        <Button
          onClick={this.handleFormSubmit}
          type={'primary'}
          title={'Create Event'}
          style={buttonStyle}
        />

        <Button
          onClick={this.handleClearForm}
          type={'secondary'}
          title={'Clear Form'}
          style={buttonStyle}
        />

      </form>

    );
  }
}


const buttonStyle = {
  margin: '10px 10px 10px 10px'
}

export default EventFormContainer;