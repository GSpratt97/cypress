describe('Handle tables', (() => {
    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();

        cy.get(".btn-close").click();
        // Customers -> customer

        cy.get("#menu-customer>a").click();
        cy.get("#menu-customer>ul>li:first-child").click();
    })

    it('Check number rows & columns', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7');
    })

    it('Check cell data from specific row & column', () => {
        cy.get(':nth-child(5) > :nth-child(3)')
        .contains("princytrainings4@gmail.com")
    })

    it('Read all the rows & column data in the first page', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get("td").each(($col, index, $cols) => {
                    cy.log($col.text());
                })
            })
        })
    })
    

    it('Pagination', () => {

    })



}))