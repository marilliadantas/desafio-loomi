let el = require("../elements/loginElements").login
const { click, set, get_text, clickForce } = require("../actions")

export default {
  preencherLogin(email, senha) {
    if (email !== null) {
      set(el.inputEmail, email, { log: false })
    }
    if (senha !== null) {
      set(el.inputSenha, senha, { log: false })
    }
  },

  clicarLogin() {
    clickForce(el.btnEntrar)
  },

  validarAlertaEmail() {
    return get_text(el.msgAlertaEmail)
  },

  validarAlertaSenha() {
    return get_text(el.msgAlertaSenha)
  },

  validarAlertaErro() {
    return get_text(el.alertaErro)
  },

  msgsAlerta() {
    return cy.get(el.msgAlertaEmail).invoke("text").then((msg1) => {
        return cy.get(el.msgAlertaSenha).invoke("text").then((msg2) => {
            return [msg1.trim(), msg2.trim()]
          })
      })
  },
}