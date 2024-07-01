let el = require('../elements/favoritosElements').favoritos
const { click, get_text, set, click_indexForce } = require('../actions');

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
        //  case 'Campeonato':
        //      click_index(el.btnMenu, 1)
        //      if (nome) {
        //          set_Index(el.inputPesquisar, nome, 1)
        //          cy.wait(1000)
        //          click_indexForce(el.checkbox, 0)
        //          break
        //      }
        //  case 'Inválido':
        //      click_index(el.btnMenu, index)
        //      if (nome) {
        //          set_Index(el.inputPesquisar, nome, index)
        //          cy.wait(1000)
        //          break
        //      }
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

     validarTimeAdicionado() {
        return get_text(el.tituloTime)
     }
}