/// <reference types="cypress" />

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    //https://www.w3schools.com/jquery/jquery_ref_selectors.asp
    it('usando JQUERY selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button]')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click() //dando erro
        cy.get("[onclick*='Francisco']")

    })


    it.only('usando xpath', () => {
        cy.xpath('//input[contains(@onclick, \'Francisco\')]')
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/..//input[@type='text']")
        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']")
        //Sem ser dinâmico
        //(//input[@type='button'][@value='Clique aqui'])[3]

    })

})