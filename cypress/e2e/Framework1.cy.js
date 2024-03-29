/// <reference types="Cypress" />


import { HomePage } from "./pageObjects/homepage.cy"

describe('date spec',function() 
{

        before(function()
        {
            cy.fixture('example').then(function(data)
            {
this.data=data              
            })

        })



it('passes',function()
{
    //cypress.config('defaultCommandTimeout',8000)
const homepage=new HomePage()
   cy.visit('https://rahulshettyacademy.com/angularpractice/')  

homepage.getEditBox().type(this.data.name) 
//cy.get(':nth-child(1) > .form-control').type(this.data.name)
homepage.getGender().select(this.data.gender) 
//cy.get('#exampleFormControlSelect1').select(this.data.gender)
homepage.getenterpreneur().should('be.disabled')
cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
//cy.get('#inlineRadio3').should('be.disabled')
cy.get(':nth-child(2) > .nav-link').click()
this.data.productName.forEach(function(element)
{
cy.selectProduct(element)
})
cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
cy.get('#country').type('India')
cy.get('.suggestions > ul > li > a').click()
cy.get('#checkbox2').check({force:true})
cy.get('input[type="submit"]').click()
cy.get('.alert').then(function(element){

    const text=element.text()
    expect(text.includes("Success")).to.be.true
}
)




      
 })
})

