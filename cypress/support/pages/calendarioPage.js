let el = require("../elements/calendarioElements").calendario
const { click_index, set_Index, click_indexForce, waitElement_index, get_text} = require("../actions")

export default {
  validarFiltroDeBusca(option, nome, index) {
    switch (option) {
      case "TimeInvalido":
        waitElement_index(el.btnMenu, 0)
        click_index(el.btnMenu, 0)
        if (nome) {
          set_Index(el.inputPesquisar, nome, index)
          cy.wait(2500)
          break
        }
      case "CampeonatoInvalido":
        waitElement_index(el.btnMenu, 1)
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

  validarMsgSemResultado() {
    return get_text(el.msgResult)
  },
}