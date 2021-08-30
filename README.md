<h1 align="center">Meet App Documentation</h1>

# Objective

To build a serverless, progressive web application (PWA) with **React** using a **test-driven** **development** **(TDD)** technique. The application uses the Google Calendar API to fetch upcoming events.

# Features & Requirements

## Key Features:
* Filter events by city.
* Show/hide event details.
* Specify number of events.
* Use the app when offline.
* Add an app shortcut to the home screen.
* View a chart showing the number of upcoming events by city.

## User Stories & Test Scenarios:

### FEATURE 1: FILTER EVENTS BY CITY
- As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.
* Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
>**Given** user hasn’t searched for any city
>**When** the user opens the app
>**Then** the user should see a list of all upcoming events
* Scenario 2: User should see a list of suggestions when they search for a city.
>**Given** the main page is open
>**When** user starts typing in the city textbox
>**Then** the user should see a list of cities (suggestions) that match what they’ve typed
* Scenario 3: User can select a city from the suggested list
>**Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
>**When** the user selects a city (e.g., “Berlin, Germany”) from the list
>**Then** their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
- As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
* Scenario 1: An event element is collapsed by default.
>**Given** the main page is open  
>**When** the user selects an event 
>**Then** the event element will collapse by default
* Scenario 2: User can expand an event to see its details.
>**Given** the event list was showing
>**When** the user clicks on an event
>**Then** the event element will expand and show more details
* Scenario 3: User can collapse an event to hide its details.
>**Given** the user has selected an event which showed more details about the event
>**When** the user clicks on the expanded event element again
>**Then** the event element will collapse to hide its details

### FEATURE 3: SPECIFY NUMBER OF EVENTS
- As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
* Scenario 1: When user hasn’t specified a number, 32 is the default number.
>**Given** the user has not specified the number of events
>**When** the list of events appear 
>**Then** the events list will be 32 by default
* Scenario 2: User can change the number of events they want to see.
>**Given** the user has opened the app
>**When** the user specifies the number of events they want to see
>**Then** the event list will show the user's specified number

### FEATURE 4: USE THE APP WHEN OFFLINE
- As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
* Scenario 1: Show cached data when there’s no internet connection.
>**Given** there's no internet connection
>**When** the user wants to view the events 
>**Then** the cached data will show the user's last viewed events
* Scenario 2: Show error when user changes the settings (city, time range).
>**Given** there's no internet connection
>**When** the user changes the app settings like location or time zone
>**Then** the app will show error letting user know they are offline

### FEATURE 5: DATA VISUALIZATION
- As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
* Scenario 1: Show a chart with the number of upcoming events in each city.
>**Given** a user would like a visual representation of events
>**When** a user clicks on chart
>**Then** the chart will show the number of upcoming events in each city.

# Technical Requirements

The app:
* must be a React application.
* must be built using the TDD technique.
* must use the Google Calendar API and OAuth2 authentication flow.
* must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
* must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
* must display well on all screen sizes (including mobile and tablet) widths of 1920px
and 320px.
* must pass Lighthouse’s PWA checklist.
* must work offline or in slow network conditions with the help of a service worker.
* must be deployed on GitHub Pages.
* must implement an alert system using an OOP approach to show information to the user.
* must make use of data visualization (recharts preferred).
* must be covered by tests with a coverage rate >= 90%.
* must be monitored using an online monitoring tool.  

* The app’s code must be hosted in a Git repository on GitHub.
* Users may be able to install the app on desktop and add the app to their home screen on mobile.
* The API call must use React axios and async/await.
