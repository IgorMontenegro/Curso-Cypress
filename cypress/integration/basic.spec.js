/// <reference types="cypress" />

describe('Cypres basico', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        //interrompe o teste
        cy.pause

        cy.title().should('be.equal', 'Campo de Treinamento')
        //cy.title().should('contain', 'Campo').debug() debug dos elementos
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        let syncTitle

        cy.title().then(title => {
            console.log(title)
            
            cy.get('#formNome').type(title)
            
            syncTitle = title
        })
        
        //por JQL
        cy.get('[data-cy=dataSobrenome]').then($el => {
            $el.val(syncTitle)
        })
        
        //Passando para cy o elemento
        cy.get('#elementosForm\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })
    })

    it('Interagir com o elemento', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})