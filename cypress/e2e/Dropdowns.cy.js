
describe("Handle dropdowns", () => {
    it.skip("Dropdown with select", () => {

        cy.visit("http://itera-qa.azurewebsites.net/home/automation")
        
        cy.get(".custom-select")
        .select("Norway")
        .should('have.value', '1')
       

    })

    it.skip("Auto-suggest dropdown", () => {

        cy.visit("http://wikipedia.org")
        
        cy.get('#searchInput').type("Delhi")
        cy.get('.suggestion-title').contains('Delhi University').click()

        cy.get('.mw-page-title-main').should('have.text', 'Delhi University')
       

    })

    it("Dynamic dropdown", () => {

        cy.visit("http://google.com")

        cy.get('#L2AGLb > .QS5gu').click()
        cy.get("input[name='q']").type("cypress automation")

        cy.wait(2000)

        cy.get('div.wM6W7d>span')
        .should('have.length', 11)
        .each(($el, index, $list) => {
            if($el.text()=='cypress automation tutorial') {
                cy.wrap($el).click()
            }
        })

        cy.get('input.gLFyf').should('have.value', 'cypress automation tutorial')

    })
})