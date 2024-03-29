describe('my first cypress test suite',function()
{
it('my first test case',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get("#checkBoxOption2").check().should('be.checked').getAllSessionStorage('have.value','option2')
    cy.get("#checkBoxOption2").uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    cy.get('select').select('option2').should('have.value','option2')
    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item').each(($e1, index, $list) => {
     
        if($e1.text()==="India")
        {
            cy.wrap($e1).click()
        }


    })
    cy.get('#autocomplete').should('have.value','India')
    cy.get("#displayed-text").should('be.visible')
    cy.get("#hide-textbox").click()
    cy.get("#displayed-text").should('not.be.visible')
    cy.get("#show-textbox").click()
    cy.get("#displayed-text").should('be.visible')

    //radio button selection
    cy.get('[value="radio2"]').click().should('be.checked')


    
})

})
