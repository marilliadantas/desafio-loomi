let el = require('../elements/favoritosElements').favoritos
const { click, get_text, set, click_indexForce, get_text_index, clickForce, click_index } = require('../actions');

export default {
    validarPagina() {
        return get_text(el.tituloPagina)
    },
     
    validarPesquisa(option, nome, index) {
    switch(option){
    case 'Time':
        click(el.btnFavoritar)
        if (nome) {
            set(el.inputTimes, nome)
            cy.wait(2000)
            click_indexForce(el.btnAddTimes, index)
            click(el.btnConcluir)
            break
        }
    case 'Canal':
        click(el.btnCanais)
        if (nome) {
            set(el.inputCanais, nome)
            cy.wait(2000)
            click_indexForce(el.btnAddCanais, index)
            click(el.btnConcluirCanais)
            break
        }
        default:
            'Favor informar uma opção válida'
         }
     },

    clicarFavoritar() {
        click_index(el.btnFavoritar, 0)
     }, 

    clicarEditar() {
        click(el.btnEditar)
     },

     clicarExcluirTime() {
        click(el.btnExcluirTime)
     },

    clicarSalvar(){
        click(el.btnSalvar)
    },

    clicarEditarCanal() {
        click(el.btnEditarCanal)
    },

    clicarExcluirCanal() {
        clickForce(el.btnExcluirCanal)
    },

    clicarConcluir() {
        click(el.btnConcluirCanais)
    },

    validarTimeAdicionado() {
        return get_text(el.tituloTime)
    },

    validarTimeRemovido() {
        cy.wait(2500)
        return get_text_index(el.msg, 0)
    },

    validarCanalAdicionado() {
        return get_text(el.nomeCanal)
    },

    validarCanalRemovido() {
        cy.wait(2500)
        return get_text_index(el.msg, 1)
    },
}