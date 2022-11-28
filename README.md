# Meet-App

<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/paulinemarg/meet-app"> <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/paulinemarg/meet-app?color=green"> <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/paulinemarg/meet-app?color=yellow"> <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/paulinemarg/meet-app?style=plastic">

![Meet](/meet.jpg)

## Description

Meet App is a serverless, progressive web application that uses the [Google Calendar API](https://developers.google.com/calendar) to fetch upcoming events. The app is built with React using a test-driven development (TDD) approach. The serverless function is hosted by AWS.

The app allows user to search for a city and get a list of events hosted in that city. The user can view charts that display the number of events that will take place in that city in upcoming days as well as the user can view the popularity of event genres in the form of a pie chart.

## Tests
* Unit Testing 
* Integration testing 
* End-to-End Testing

## Technologies
* Javascript
* React
* HTML
* CSS
* SCSS
* Gherkin

## Quick Start 🚀

To run the app locally, clone the repository, and complete the following steps:

### Install dependencies

```bash
npm install
```

### Start application with npm and run in browser

_By default the app will run a local server on port: 3000_

```bash
npm run start
```

### Running application tests

```bash
npm run test
```

---

## Features

Described in terms of user stories and scenarios

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
- As a user, I should be able to show/hide event details so that I can see more/less information about an event.
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
- As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
* Scenario 1: When user hasn’t specified a number, 32 is the default number.
>**Given** the user has not specified the number of events
>**When** the list of events appear 
>**Then** the events list will be 32 by default
* Scenario 2: User can change the number of events they want to see.
>**Given** the user has opened the app
>**When** the user specifies the number of events they want to see
>**Then** the event list will show the user's specified number

### FEATURE 4: USE THE APP WHEN OFFLINE
- As a user, I should be able to use the app offline so that I can see the events I viewed the last time I was online.
* Scenario 1: Show cached data when there’s no internet connection.
>**Given** there's no internet connection
>**When** the user wants to view the events 
>**Then** the cached data will show the user's last viewed events
* Scenario 2: Show error when user changes the settings (city, time range).
>**Given** there's no internet connection
>**When** the user changes the app settings like location or time zone
>**Then** the app will show error letting user know they are offline

### FEATURE 5: DATA VISUALIZATION
- As a user, I would be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
* Scenario 1: Show a chart with the number of upcoming events in each city.
>**Given** a user would like a visual representation of events
>**When** a user clicks on chart
>**Then** the chart will show the number of upcoming events in each city.
