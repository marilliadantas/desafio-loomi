let el = require("../elements/modalElements").modal
const { click, get_text } = require("../actions")

export default {
  clicarBtnCriarConta() {
    click(el.btnCriarConta)
  },

  clicarBtnSair() {
    click(el.btnSair)
  },

  validarModal() {
    return get_text(el.tituloModal)
  },

  validarMsg() {
    return get_text(el.msg)
  },
}