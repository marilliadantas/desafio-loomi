let el = require('../elements/favoritosElements').favoritos
const { click, get_text, set, click_indexForce, get_text_index, clickForce } = require('../actions');

export default {
    validaPaginaFavoritos() {
        return get_text(el.tituloPagina).then((text) => {
         expect(text).eq('Partidas favoritas')
       })
     },
     
    validarFiltroDeBusca(option, nome) {
    cy.wait(2000)
    switch(option){
    case 'Time':
        click(el.btnFavoritar)
        if (nome) {
            set(el.inputTimes, nome)
            cy.wait(1000)
            click_indexForce(el.btnAddTimes, 3)
            click(el.btnConcluir)
            break
        }
    case 'Canal':
        click(el.btnCanais)
        if (nome) {
            set(el.inputCanais, nome)
            cy.wait(1000)
            click_indexForce(el.btnAddCanais, 0)
            click(el.btnConcluirCanais)
            break
        }
         default:
             'Favor informar uma opção válida'
         }
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
        cy.wait(3000)
        return get_text_index(el.msg, 0)
    },

    validarCanalAdicionado() {
        return get_text(el.nomeCanal)
    },

    validarCanalRemovido() {
        cy.wait(3000)
        return get_text_index(el.msg, 1)
    },
}