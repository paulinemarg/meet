import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { WarningAlert } from './Alert';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
    warningText: ""
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
      if (navigator.onLine) {
        console.log('online');
        this.setState({
          warningText: "",
        });
      } else {
        console.log('offline');
        this.setState({
          warningText: "You are currently using the app offline."
        });
      };
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents = (location === 'all' && eventCount === 0) ?
        events : location !== 'all' && eventCount === 0
          ? events.filter((event) => event.location === location)
          : events.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>Let's Meet-App</h1>
          <WarningAlert text={this.state.warningText} />
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          <EventList className="eventlist" events={this.state.events} />
          <button className="scrollup-btn" onClick={this.scrollTop}>&#8593;</button>
          <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        </div>
      </>
    );
  }
}

export default App;
