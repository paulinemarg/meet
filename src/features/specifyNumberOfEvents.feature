Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number.
    Given the main page is open
    When the list of events appear
    Then the events list will be 32 by default

  Scenario: User can change the number of events they want to see.
    Given the user has viewed a list of events
    When the user specifies the number of events they want to see
    Then the event list will show the user's specified number