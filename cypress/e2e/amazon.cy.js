describe('template spec', () => {
    it('passes', () => {
    cy.visit('https://www.amazon.in')
    cy.get("#twotabsearchtextbox").type('macbook')
    cy.get("#nav-search-submit-button").click()
    cy.get('#p_n_feature_twenty-six_browse-bin-title')
    cy.get('li').filter(':contains("16 GB")').find('input').first().click({force:true})
    


  

    


    })
  })