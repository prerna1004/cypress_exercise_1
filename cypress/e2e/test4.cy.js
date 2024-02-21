describe('my first cypress test suite',function()
{
it('my first test case',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get("#alertbtn").click()
    cy.get('#confirmbtn').click()

    
})

})
