describe('my first cypress test suite',function()
{
it('my first test case',function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('input[type="search"]').type("ca")
    //cy.get(".product:visible").should('have.length',4)
    //visible use for pointing to visible object
    cy.get('.products').as('projectlocator')
   // cy.get('@projectlocator').find(".product").should('have.length',4)
    //parent child chaining
    //cy.get(':nth-child(3) > .product-action > button').click()
    cy.get('@projectlocator').find(".product").eq(2).contains('ADD TO CART').click()
    cy.get('@projectlocator').find(".product").each(($e1, index, $list)=> {
      
        const textveg=$e1.find('h4.product-name').text()
        if(textveg.includes('Cashews'))
        {

            cy.wrap($e1).find('button').click({force:true})
        }
       // cy.get('.brand').then(function(logoelement)
    
         //   cy.log(logoelement.text())
    })
        

        
    cy.get('.cart-icon > img').click()   
    cy.get('button').contains('PROCEED TO CHECKOUT').click()
    cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
        




    








})






})