const { css } = require("cypress/types/jquery")

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')

        cy.get(css)
    })
  })