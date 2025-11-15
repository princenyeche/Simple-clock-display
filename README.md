# Simple Digital Clock
A simple display of the time using TypeScript

This web app shows how time is displayed on a web page. It uses TypeScript plus JavaScript's native Date object to render the current time.
There's nothing intuitive about this web app, as it's just rendering an already existing feature.

The next steps here are to beautify the display with CSS to make it look more visually pleasing, and probably add a different timezone
to the web app to make it possible to render the time for other time zones.

## Step 1: Create a simple digital clock
- Using TypeScript create a simple digital clock

## Step 2: Add CSS styling to the digital clock
- Using a digital font to achieve a digital clock look and feel
- Add a simple button to alter the color of the clock based on user click

## Step 3: Use a Typed Framework to write JSX
- Using Atlaskit to write the JSX part of the app, it should handle both CSS and HTML elements
- Use another framework for the icons or any other typed version to help structure the app
- Create a project structure to document the stages of the app development

## Step 4: Add test suites
- Add test suites
- Cypress test
- Playwright test
- Both can be used interchangeably 

### Step 4.1: clockFace design
- Added a few CSS to handle the change in clockFace
- Added new fonts for the different clockFaces
- Included the logic for changing clockFace
- Added a context as `ClockProvider` for handling the change in clockFace rather than using localStorage

### Step 4.2: Added more components and architectural design
- Added more components
- Created the app context and providers
- Added a new interface to remove "any" keyword
- Checked the app linting command

### Step 4.3: Added app context for typed datatypes
- Added more app context
- Added context for the auth user for the backend connection
- Added UI layout