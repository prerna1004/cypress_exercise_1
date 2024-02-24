describe('date spec', () => {
    it('passes', () => {

        const date='25'
        const month='6'
        const year='2027'
        const expected= [month,date,year]
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.cart-header-navlink').contains('Top Deals').invoke('removeAttr','target').click()
      cy.get('.react-date-picker').click()
      cy.get('.react-calendar__navigation__label').click()
      cy.get('.react-calendar__navigation__label').click()
      cy.get('.react-calendar__tile').contains(year).click()
      cy.get('.react-calendar__year-view__months__month').eq(Number(month-1)).click()
      cy.contains("abbr",date).click()

      cy.get('.react-date-picker__inputGroup__input').each(($e1,index) =>
      {

               cy.wrap($e1).invoke('val').should('eq',expected[index])

      })
      
      
    })
  })