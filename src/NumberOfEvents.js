import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: '',
  };
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);

    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please insert a valid number between 1 and 32'
      });
    }
    else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      });
    }

  };
  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <input
          className="event-number-input"
          type="number"
          placeholder="0"
          id="numberOfEvents__input"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;