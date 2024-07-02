let el = require("../elements/perfilElements").perfil
const { click, get_text, set, clear } = require("../actions")

export default {
  clicarBtnEditarPerfil() {
    click(el.btnEditar)
  },

  editarNome(nome) {
    clear(el.inputNome)
    set(el.inputNome, nome)
    click(el.btnSalvar)
  },

  clicarBtnSair() {
    click(el.btnSair)
  },

  clicarBtnSalvar() {
    click(el.btnSalvar)
  },

  clicarBtnExcluirConta() {
    click(el.btnExcluir)
  },

  clicarBtnExcluir() {
    click(el.btnExcluirConta)
  },

  validaMsgConfirmacao() {
    return get_text(el.msgConfirmacao)
  },

  validarMsgSucesso() {
    return get_text(el.msgSucesso)
  },
}
