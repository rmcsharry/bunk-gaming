describe('main navigation spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Scenario: user can navigate to the platforms page and back home", () => {
    cy.get('[data-testid="platforms-link"]').click();
    cy.location('pathname').should('eq', '/platforms');
    cy.get('[data-testid="home-link"]').click();
    cy.location('pathname').should('eq', '/');
  });

  it("Scenario: user can navigate to the developers page and back home", () => {
    cy.get('[data-testid="developers-link"]').click();
    cy.location('pathname').should('eq', '/developers');
    cy.get('[data-testid="home-link"]').click();
    cy.location('pathname').should('eq', '/');
  });

})
