let el = require('../elements/cadastroElements').cadastro
const {click, set, get_text, get_text_index } = require('../actions');

export default {
    preencherCadastro(nome, email, senha, confirmSenha) {
        if (nome !== null) {
        set(el.inputNome, nome)
        }

        if (email !== null) {
        set(el.inputEmail, email)
        }

        if (senha !== null) {
        set(el.inputSenha, senha)
        }

        if (confirmSenha !== null) {
            set(el.inputConfirmSenha, confirmSenha)
        }
    },

   clicarCriarConta() {
        click(el.btnCriarConta)
    },

    clicarCancelarConta() {
        click(el.btnCancelar)
    },

    validarAlerta() {
        return get_text(el.alertaErro)
    },

    validarAlerta2(index) {
        return get_text_index(el.alertaErro2, index)
    },

    msgsAlerta() {
        return get_text_index(el.alertaErro, 0).then(msg1 => {
          return get_text_index(el.alertaErro, 1).then(msg2 => {
            return get_text(el.alertaErro2).then(msg3 => {
              return [msg1.trim(), msg2.trim(), msg3.trim()]
            })
          })
        })
    }
}