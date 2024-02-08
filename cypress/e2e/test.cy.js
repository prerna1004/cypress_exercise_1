describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/')
    cy.get("input[data-testid='name-input']").type("Prerna")
    expect(cy.get("#developer-name").should("have.value", "Prerna"))
    cy.get("#populate").click()
    expect(cy.get("#developer-name").should("have.value","Peter Parker"))
    cy.get("#remote-testing").check()
    cy.get("#background-parallel-testing").check()
    cy.get("#windows").check()
    cy.get("#preferred-interface").select('JavaScript API')
    cy.get("#tried-test-cafe").check()
    cy.get("#comments").type('ok')
    cy.get("#submit-button").click()
    cy.get("#article-header")
    expect(cy.get("#article-header").should("have.text","Thank you, Peter Parker!"))
    
  })
})