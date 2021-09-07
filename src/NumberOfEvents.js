import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  };
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);

    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: ''
      });
    }
    else {
      this.setState({
        numberOfEvents: value
      });
    }

  };
  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <input
          className="eventnumber"
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