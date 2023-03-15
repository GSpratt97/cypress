
describe("Assertions demo", () => {
    it("Implicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.url().should('include', "orangehrmlive.com")
        .and('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and('contain', "orangehrmlive")
        .and('not.contain', "greenhrm")

        cy.title().should('include', "Orange")
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath('//a').should('have.length', '5')

        cy.get("input[placeholder='Username']").type("Admin")
        .should('have.value', 'Admin')
    })

    it("Explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Paul Collings";

        cy.get(".oxd-userdropdown-name").then( (x) => {
            let actName = x.text()

            // BDD
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal("Not this")

            // TDD
            assert.equal(actName, expName)
            assert.notEqual(actName, "No")
        })

    })
    
})