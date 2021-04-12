const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        HOME: '[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        EXTRATO: '[data-test=menu-extrato]',
        FN_XP_CAMPOTABELA: campo => `//table/tbody/tr/td[contains(., '${campo}')]`,
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        FN_XP_BTN_ALTERAR: nome => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-edit']`,
    },

    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        BTN_SALVAR: '.btn-primary',
        STATUS: '[data-test=status]',
    },

    EXTRATO : {
        LINHAS: '.list-group > li',
        FN_XP_BUSCA_ELEMENTO: (desc,value) => `//span[contains(., '${desc}')]/following-sibling::small[contains(., '${value}')]`,
        FN_XP_ALTERAR_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='fas fa-edit']`,
        FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`,
    },

    SALDO: {
        FN_XP_SALDO_CONTA: nome => `//td[contains(., '${nome}')]/../td[2]`,
    },

    MESSAGE: '.toast-message'
}

export default locators