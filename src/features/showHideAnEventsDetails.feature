Feature: Show/Hide events details

  Scenario: An event element is collapsed by default
    Given The main page is open.
    When the user views the event list
    Then the event element will collapse by default

  Scenario: User can expand an event to see its details
    Given the event list was showing
    When the user clicks on an event
    Then the event element will expand and show more details

  Scenario: User can collapse an event to hide its details
    Given the user has selected and event which showed more details about the event
    When the user clicks on the expended event element again
    Then the event element will collapse to hide its details