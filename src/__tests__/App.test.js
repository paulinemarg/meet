import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

// Unit tests
describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  test('renders NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

// Integration tests
describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });
  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });
  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });
  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });
  test("App passes 'numberOfEvents' state as a prop to 'NumberOfEvents' component", () => {
    const AppWrapper = mount(<App />);
    const AppNumberOfEventsState = AppWrapper.state('numberOfEvents');
    expect(AppNumberOfEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(
      AppNumberOfEventsState
    );
    AppWrapper.unmount();
  });
  test('App should render a number of 32 events by default', () => {
    const AppWrapper = mount(<App />);
    const numberOfEventsItems = AppWrapper.find(NumberOfEvents).find(
      '.event-number-input'
    );
    expect(numberOfEventsItems.props().value).toEqual(32);
    AppWrapper.unmount();
  });
  test("App should change number of events when 'NumberOfEvents' component changes from 32 to 16", async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const locations = extractLocations(mockData);
    NumberOfEventsWrapper.setState({ events: locations, eventCount: 16 });
    NumberOfEventsWrapper.find('.event-number-input').simulate('change');
    expect(NumberOfEventsWrapper.state('eventCount')).toEqual(16);
    AppWrapper.unmount();
  });
  //
  test("Change in the number of events should be led to changes on the EventList component.", async () => {

    const AppWrapper = mount(<App />);
    const locations = extractLocations(mockData);
    AppWrapper.setState({ numberOfEvents: "32", locations: "all" });
    const eventObject = { target: { value: 1 } };
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    await NumberOfEventsWrapper.find(".event-number-input").simulate(
      "change",
      eventObject
    );
    AppWrapper.unmount();
  });

});
