
/// <reference types="cypress" />

describe('Barriga backend', () => {

    let token

    before(() => {
        cy.getToken('icmc.com','icmc')
            .then(tkn => {
                token = tkn
            })
    })

    beforeEach(() => {
        cy.resetRest()
    })

    it('Should create account', () => {
        
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}`}, //da pra trocar JWT por Bearer
            body: {
                nome: "Conta via REST"
            }
        }).as('response')

        //essa vai esperar a resposta da função anterior
        cy.get('@response').then(res => {
            expect(res.status).to.have.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via REST')
        })
    })

    it('Should update an account', () => {
        cy.request({ 
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'GET',
            headers: { Authorization: `JWT ${token}`}, //da pra trocar JWT por Bearer
            qs: {
                nome: "Conta para alterar"
            }
        }).then(res => {
            cy.request({ 
                url: `https://barrigarest.wcaquino.me/contas/${res.body[0].id}`,
                method: 'PUT',
                headers: { Authorization: `JWT ${token}`}, //da pra trocar JWT por Bearer
                body: {
                    nome: "conta alterada via rest"
                }
            }).as('response')
        })

        cy.get('@response').its('status').should('be.equal', 200)
        //console.log(res)
    })

    it.only('Should not create an account with same name', () => {
        cy.request({
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}`}, //da pra trocar JWT por Bearer
            body: {
                nome: "Conta mesmo nome"
            },
            failOnStatusCode: false
        }).as('response')

        //essa vai esperar a resposta da função anterior
        cy.get('@response').then(res => {
            expect(res.status).to.have.be.equal(400)
            // expect(res.body).to.have.property('nome', 'Já existe uma conta com esse nome!')
            //expect(res.body.nome).to.be.equal('Já existe uma conta com esse nome!')
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })
    })

    it('Should create a transaction', () => {
     
    })

    it('Should get balance', () => {
    
    })

    it('Should remova a transaction', () => {
    
    })
})