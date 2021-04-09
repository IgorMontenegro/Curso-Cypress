/// <reference types="cypress" />

describe('Esperas...', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Sync', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona')
    })

    it('Retentativas', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
    })

    it('Uso do find listar', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')

    })

    it('Uso do find listar DOM', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')

    })

    it('Uso do TIMEOUT', () => {
        //cy.get('#buttonDelay').click()
        //cy.get('#novoCampo', { timeout:1000}).should('exist')

        /***EXEMPLO DE WAIT***
        cy.get('#buttonListDOM').click()
        cy.wait(5000)
        cy.get('#lista li span')
            .should('contain', 'Item 2')
        */

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', { timeout:30000})
            .should('contain', 'Item 2')

    })

    it('Uso do TIMEOUT retry', () => {
        cy.get('#buttonListDOM').click()
        //Para os 2 não precisa de timeout
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
    })

    it('Clique retry', () => {
        cy.get('#buttonCount')
            .click()
            .should('have.value', '11')
    })

    it.only('Should vs Then', () => {
        /*
        cy.get('#buttonListDOM').click()
        //then aguarda
        cy.get('#lista li span').then(el => {
            console.log(el)
            expect(el).to.have.length(1)
        })
        //should fica tentando
        cy.get('#lista li span').should(el => {
            console.log(el)
            expect(el).to.have.length(1)
        })
        */
        
        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })

    })
})
