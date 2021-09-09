import { loadFeature, defineFeature } from 'jest-cucumber';
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when('the list of events appear', () => {
      //when the app loads the list of events will appear
    });

    then('the events list will be 32 by default', () => {
      AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has viewed a list of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user specifies the number of events they want to see', () => {
      const eventObject = { target: { value: '1' } };
      AppWrapper.find('.event-number-input').simulate('change', eventObject);
    });

    then("the event list will show the user's specified number", () => {
      AppWrapper.update();
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('1');
    });
  });
});