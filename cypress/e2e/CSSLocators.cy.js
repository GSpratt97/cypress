
describe('CSSLocators', () => {

    it("csslocators", () => {
        cy.visit("https://automationexercise.com/")

        cy.get("a[href='/products']").click()
        cy.get("#search_product").type("T-Shirts")
        cy.get("#submit_search").click()

        cy.get("div[class='productinfo text-center'] p").contains("T-Shirts")
    })
})