import '@bahmutov/cy-api'
import { When } from "@badeball/cypress-cucumber-preprocessor";

When("the user clicks navbar collapse button", function () {
  cy.get('#collapse-button').click()
});

When("the user clicks the {string} license panel", function (licenseName: string) {
  cy.get('#' + licenseName + "_panel").click()
});
