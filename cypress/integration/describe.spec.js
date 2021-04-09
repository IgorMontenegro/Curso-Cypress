/// <reference types="cypress" />

it('Teste externo...', ()=>{

})

//grupo
//skip pula pacote ou teste
//only apenas aquele teste ou pacote

describe('Pacote agrupado teste...', () => {
    describe('Grupo específico no pacote', () => {
        it('Teste específico...', ()=>{

        })

    })
    
    describe.skip('Grupo específico no pacote', () => {
        it.skip('Teste específico...', ()=>{

        })

    })

    it.only('Teste interno...', ()=>{

    })
})