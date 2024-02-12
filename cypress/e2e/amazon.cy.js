describe('template spec', () => {
    it('passes', () => {
    cy.visit('https://www.amazon.com')
    cy.get("#twotabsearchtextbox").type('macbook')
    cy.get("#nav-search-submit-button").click()
    


      
    })
  })