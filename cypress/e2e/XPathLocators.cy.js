
describe('XPathLocators', () => {
    it('find no of products', () => {
        cy.visit("https://automationexercise.com")

        cy.xpath("/html/body/section[2]/div/div/div[2]/div[1]/div").should('have.length', 35)
    })
})