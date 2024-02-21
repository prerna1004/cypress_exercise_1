
describe('my first cypress test suite',function()
{
it('my first test case',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('#opentab').invoke('removeAttr', 'target').click()

    cy.origin("https://www.qaclickacademy.com",() =>
    {

    cy.get('#navbarSupportedContent').contains('About us').click();
    cy.get('.mt-50 h2').should('have.text','Welcome to QAClick Academy ');


    }
    
    )

    
    
    
})

})
