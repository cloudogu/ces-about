# CesAbout

This project is built with vanilla / plain js and hmtl only

## Development server

First run `npm install`. Then run `docker build -t ces-about .` and `docker run -d -p 4200:80 ces-about` for a dev server. Navigate to `http://localhost:4200/`.

## Running end-to-end tests

Run `yarn cypress run` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).
Before running the tests make sure the development server is running.
