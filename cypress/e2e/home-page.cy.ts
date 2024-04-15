describe('home page spec', () => {

  it("Scenario: home page loads the latest 4 games and user can navigate to the games page", () => {
    const url = "**/api/games?*";
    cy.intercept(url).as('latestGames');
    cy.visit('/');
    cy.wait('@latestGames');
    cy.get('[data-testid="game-card"]')
      .should((items) => {
        expect(items).to.have.length(4)
      });
    // Click on the first game card (not a separate test because it's a continuation of the same scenario)
    cy.get('[data-testid="game-card"]').eq(0).then(($link) => {
      const expectedUrl = new URL($link.prop('href')).pathname;
      cy.wrap($link).click();
      cy.location('pathname').should('eq', expectedUrl);
    });
  });
})
