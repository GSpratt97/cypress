
describe("Check UI Elements", () => {
    it("Checking Radio Buttons", () => {

        cy.visit("http://itera-qa.azurewebsites.net/home/automation")
        
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible')

        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')

    })

    it("Checking Checkboxes", () => {

        cy.visit("http://itera-qa.azurewebsites.net/home/automation")
        
        // Visibility of element
        cy.get("#monday").should('be.visible')
        cy.get("#tuesday").should('be.visible')
        cy.get("#wednesday").should('be.visible')
        cy.get("#thursday").should('be.visible')
        cy.get("#friday").should('be.visible')
        cy.get("#saturday").should('be.visible')
        cy.get("#sunday").should('be.visible')

        // Check
        cy.get("#monday").check().should('be.checked')
        // Uncheck
        cy.get("#monday").uncheck().should('not.be.checked')
        cy.get("#tuesday").should('not.be.checked')

        // Check all then uncheck all
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // Select first and last checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

    })
})