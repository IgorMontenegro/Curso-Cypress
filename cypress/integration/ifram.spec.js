/// <reference types="cypress" />

describe('Iframes Janelas', () => {
    it('Preencher campo de texto...', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funciona?!')
                .should('have.value', 'funciona?!')

            cy.on('window:alert', msg => {
                expect(msg).to.be.equal('Alert Simples')
            })
            //cy.wrap(body).find('#otherButton').click()
            //trava no ok do iframe
        })
    })

    it.only('Testa frame separado...', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
})

