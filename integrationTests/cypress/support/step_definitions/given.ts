import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("viewport is set to {int} by {int}", (width : number, height : number) => {
  cy.viewport(width, height)
});

Given("user is on page {string}", (pageName: String) => {
  cy.visit(Cypress.env("baseUrl") + "/" + pageName + ".html")
});
