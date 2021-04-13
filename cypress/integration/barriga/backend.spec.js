
/// <reference types="cypress" />

describe('Barriga backend', () => {
    before(() => {
        //cy.login('icmc.com','icmc')
    })

    beforeEach(() => {
        //cy.resetApp()
    })

    it('Should create account', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: "icmc.com",
                redirecionar: false,
                senha: "icmc"
            }
        }).then(res => console.log(res))
    })

    it('Should update an account', () => {
        
    })

    it('Should not create an account with same name', () => {
       
    })

    it('Should create a transaction', () => {
     
    })

    it('Should get balance', () => {
    
    })

    it('Should remova a transaction', () => {
    
    })
})