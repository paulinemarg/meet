import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('The main page is open.', () => {
      AppWrapper = mount(<App />);
    });

    when('the user views the event list', () => {
    });

    then('the event element will collapse by default', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event-details")).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;
    given('the event list was showing', () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    when('the user clicks on an event', () => {
      EventWrapper.find('.event .details-btn').at(0).simulate("click");
    });

    then('the event element will expand and show more details', () => {
      expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventWrapper;
    given('the user has selected and event which showed more details about the event', () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
      EventWrapper.setState({
        expanded: true,
      });
      expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });

    when('the user clicks on the expended event element again', () => {
      EventWrapper.find('.event .details-btn').at(0).simulate('click');
    });

    then('the event element will collapse to hide its details', () => {
      expect(EventWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });
});