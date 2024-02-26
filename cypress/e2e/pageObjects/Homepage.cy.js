export class HomePage
{
getEditBox()
{
    return cy.get(':nth-child(1) > .form-control')

}
gettwowaydatabinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')

}
getGender()
{

    return cy.get('#exampleFormControlSelect1')

}
getenterpreneur()
{
    return cy.get('#inlineRadio3')
}
getshoptab()
{
    return cy.get(':nth-child(2) > .nav-link')  
}
}

export default HomePage; //export keyword makesure that this call ois accesible to class

