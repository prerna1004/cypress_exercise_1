/// <reference types="Cypress" />

import Homepage from '../pageObjects/Homepage'

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
const homepage=new Homepage()
   cy.visit('https://rahulshettyacademy.com/angularpractice/')  

homepage.getEditBox().type(this.data.name) 
//cy.get(':nth-child(1) > .form-control').type(this.data.name)
homepage.gender().select(this.data.gender) 
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



      
    })
  })