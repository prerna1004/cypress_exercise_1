describe('template spec', () => {
    it('passes', () => {
    cy.visit('https://www.amazon.in')
    cy.get("#twotabsearchtextbox").type('macbook')
    cy.get("#nav-search-submit-button").click()
    cy.get('#p_n_feature_twenty-six_browse-bin-title')
    cy.get('li').filter(':contains("8 GB")').find('input').first().click({force:true})
    cy.get('.a-section').contains('Apple 2023 MacBook Air Laptop with M2 chip: 38.91cm (15.3 inch) Liquid Retina Display, 8GB RAM 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera,Touch ID. Works with iPhone/iPad; Midnight').invoke('removeAttr','target').click()
    cy.get('.a-accordion-inner')
    //cy.get('#addToCart')
    cy.get("#add-to-cart-button").click({force:true})
    //cy.get('.a-section attach-warranty-button-row')
    cy.get('#attachSiNoCoverage').click({force:true})
    cy.get('.a-accordion-inner')
    cy.get("#add-to-cart-button").click({force:true})
    cy.get('#nav-cart-count-container')
   // expect(cy.get('#nav-cart-count-container')).should(have.value, '1')

   


  

    


    })
  })