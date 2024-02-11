describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://devexpress.github.io/testcafe/example/')
      cy.get('[data-testid="name-input"]').type("Prerna")
      expect(cy.get('[data-testid="name-input"]').should("have.value", "Prerna"))
      cy.get('[data-testid="populate-button"]').click()
      expect(cy.get('[data-testid="name-input"]').should("have.value","Peter Parker"))
      cy.get('[data-testid="remote-testing-checkbox"]').check()
      cy.get('[data-testid="parallel-testing-checkbox"]').check()
      cy.get('[data-testid="windows-radio"]').check()
      cy.get('[data-testid="preferred-interface-select"]').select('Command Line')
      cy.get('[data-testid="tried-testcafe-checkbox]').check()
      cy.get('[data-testid="comments-area"]').type('ok')
      cy.get("#submit-button").click()
      cy.get("#article-header")
      expect(cy.get("#article-header").should("have.text","Thank you, Peter Parker!"))
      
    })
  })