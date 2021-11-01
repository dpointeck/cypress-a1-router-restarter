/// <reference types="cypress" />

import { username, password } from "../../support/config";

const login = (name, password) => {
  cy.session([name, password], () => {
    cy.visit("http://10.0.0.138/");
    cy.get("#password").type(password);
    cy.get("#loginbtn").click();
    cy.url().should("contain", "/wizard.html");
  });
};

describe("restart the A1 router", () => {
  beforeEach(() => {
    login(username, password);
  });

  it("Logs into the Dashboard", () => {
    cy.visit("http://10.0.0.138/html/advance.html#device_info");
    cy.get("#device_mngt_menuId").click();
    cy.get("#rebootId").click();
    cy.get("#dev_mngt_modal_id_ok").click();
  });

  after(() => {
    Cypress.session.clearAllSavedSessions();
  });
});
