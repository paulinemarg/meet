import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //event: {},
      expanded: false,
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }
  render() {
    let event = this.props.event;
    return (
      <div className="event">
        <h2 className="event__Overview--name">{event.summary}</h2>
        <div className="basic-info">
          <h2 className="event-location">{event.location}</h2>
          <h3 className="event__Overview--localDate">
            start: {event.start.dateTime} - Time Zone: {event.start.timeZone}
          </h3>
          {this.state.expanded === true && (
            <p className="event-details">{event.description}</p>
          )}
        </div>
        <button className="details-btn" onClick={this.toggleExpanded}>
          {!this.state.expanded ? 'Read More' : 'Close'}
        </button>
      </div>
    );
  }
}
export default Event;