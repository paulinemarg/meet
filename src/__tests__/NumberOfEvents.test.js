import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });
  test('renders text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(
      NumberOfEventsWrapper.find('#numberOfEvents__input').prop('value')
    ).toBe(numberOfEvents);
  });
  test('change state when input changes', () => {
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find('#numberOfEvents__input').simulate(
      'change',
      eventObject
    );
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });
});