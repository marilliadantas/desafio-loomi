let el = require("../elements/melhoresMomentosElements").melhoresMomentos
const { get_text, click_index, set_Index, click_indexForce, listLength, waitElement, waitElement_index } = require("../actions")

export default {
  validarFiltroDeBusca(option, nome, index) {
    switch (option) {
      case "Time":
        waitElement(el.btnMenu)
        click_index(el.btnMenu, 0)
        if (nome) {
          set_Index(el.inputPesquisar, nome, index)
          waitElement_index(el.checkbox, 3)
          click_indexForce(el.checkbox, 3)
          break
        }
      case "Campeonato":
        click_index(el.btnMenu, 1)
        if (nome) {
          set_Index(el.inputPesquisar, nome, index)
          waitElement_index(el.checkbox, 0)
          click_indexForce(el.checkbox, 0)
          break
        }
      case "TimeInvalido":
        click_index(el.btnMenu, 0)
        if (nome) {
          set_Index(el.inputPesquisar, nome, index)
          cy.wait(2500)
          break
        }
        case "CampeonatoInvalido":
        click_index(el.btnMenu, 1)
        if (nome) {
          set_Index(el.inputPesquisar, nome, index)
          cy.wait(2500)
          break
        }
      default:
        "Favor informar uma opção válida"
    }
  },

  validarListaCards(qtd) {
    return listLength(el.listaCards, qtd)
  },

  validarMsgSemResultados() {
    return get_text(el.msgResults)
  },
}