let el = require('../elements/melhoresMomentosElements').melhoresMomentos
const { click, get_text, click_index, set, set_Index, waitElement, click_indexForce } = require('../actions');

export default {
   validaPaginaMelhoresMomentos() {
       return get_text(el.titulo).then((text) => {
        expect(text).eq('Melhores momentos das Partidas Finalizadas')
      })
    },
    
    validarFiltroDeBusca(option, nome, index) {
    cy.wait(2000)
    switch(option){
        case 'Time':
            click_index(el.btnMenu, 0)
            if (nome) {
                set_Index(el.inputPesquisar, nome, 0)
                cy.wait(1000)
                click_indexForce(el.checkbox, 3)
                break
            }
        case 'Campeonato':
            click_index(el.btnMenu, 1)
            if (nome) {
                set_Index(el.inputPesquisar, nome, 1)
                cy.wait(1000)
                click_indexForce(el.checkbox, 0)
                break
            }
        case 'Inválido':
            click_index(el.btnMenu, index)
            if (nome) {
                set_Index(el.inputPesquisar, nome, index)
                cy.wait(1000)
                break
            }
        default:
            'Favor informar uma opção válida'
        }
    },

    validarListaCards(qtd) {
        cy.get(el.listaCards)
            .should('exist')
            .and('have.length', qtd)
    },

    validarMsgSemResultados() {
        return get_text(el.msgResults)
    }
}