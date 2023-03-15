
describe('Handle tabs', () => {

    it.skip('Approach1', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').invoke('removeAttr', 'target').click();

        cy.url().should('equal', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);

        // Operation back to parent tab
        cy.go('back')

        cy.url().should('not.equal', 'https://the-internet.herokuapp.com/windows/new')

    })

    it('Approach2', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example > a').then((e) => {
            const url = e.prop('href');
            cy.visit(url)

        })

        cy.url().should('equal', 'https://the-internet.herokuapp.com/windows/new')
    })
})