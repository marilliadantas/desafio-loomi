let el = require("../elements/melhoresMomentosElements").melhoresMomentos
const { get_text, click_index, set_Index, click_indexForce, listLength } = require("../actions")

export default {
  validarFiltroDeBusca(option, nome, index) {
    switch (option) {
      case "Time":
        click_index(el.btnMenu, 0)
        if (nome) {
          set_Index(el.inputPesquisar, nome, index)
          click_indexForce(el.checkbox, 3)
          break
        }
      case "Campeonato":
        click_index(el.btnMenu, 1)
        if (nome) {
          set_Index(el.inputPesquisar, nome, index)
          click_indexForce(el.checkbox, 0)
          break
        }
      case "Inválido":
        click_index(el.btnMenu, index)
        if (nome) {
          set_Index(el.inputPesquisar, nome, index)
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