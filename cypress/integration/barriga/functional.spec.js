
/// <reference types="cypress" />

import loc  from '../../support/locators'

describe('Barriga funcional', () => {
    before(() => {
        cy.login('icmc.com','icmc')
        cy.resetApp()
    })

    it('Should create account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta de teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()

        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })

    it('Should update an account', () => {
        //cy.get('[href="/reset"]').click()
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME) 
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()

        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')

    })
})