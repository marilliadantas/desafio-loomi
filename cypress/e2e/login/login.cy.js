import home from "../../support/pages/homePage";
import modal from "../../support/pages/modalPage";
import login from "../../support/pages/loginPage";

  describe("Validar login", () => {
    beforeEach(() => {
      home.acessarPagina()
      home.abrirModal()
      modal.validarModal()
    })

    context("Login - Fluxo principal", () => {
      afterEach(() => {
        home.abrirModal()
        modal.clicarBtnSair()
      })
  
      it("CT01 - Login com credenciais válidas", () => {
        login.preencherLogin(Cypress.env("email"), Cypress.env("senha"))
        login.clicarLogin()
        home.validarUsuarioLogado().then((text) => {
          expect(text).eq('Teste')
        })
      })
    })

    context("Login - Fluxos de exceção", () => {
      it("CT02 - Login com e-mail inválido", () => {
        login.preencherLogin("emailinvalido@gmail.com", Cypress.env("senha"))
        login.clicarLogin()
        login.validarAlertaErro().then((text) => {
          expect(text).eq('Não foi possivel fazer o login! Verifique se o email e a senha estão corretos.')
        })
      })
  
      it("CT03 - Login com campo e-mail vazio", () => {
        login.preencherLogin(null, Cypress.env("senha"))
        login.clicarLogin()
        login.validarAlertaEmail().then((text) => {
          expect(text).eq('Digite seu e-mail para continuar.')
        })
      })
  
      it("CT04 - Login com senha inválida", () => {
        login.preencherLogin(Cypress.env("email"), "senhainvalida")
        login.clicarLogin()
        login.validarAlertaErro().then((text) => {
          expect(text).eq('Não foi possivel fazer o login! Verifique se o email e a senha estão corretos.')
        })
      })
  
      it("CT05 - Login com campo senha vazio", () => {
        login.preencherLogin(Cypress.env("email"), null)
        login.clicarLogin()
        login.validarAlertaSenha().then((text) => {
          expect(text).eq('Digite sua senha para continuar.')
        })
      })
  
      it("CT06 - Login com todos os campos vazios", () => {
        login.preencherLogin(null, null)
        login.clicarLogin()
        login.msgsAlerta().then(([msg1, msg2]) => {
          expect(msg1).to.equal("Digite seu e-mail para continuar.")
          expect(msg2).to.equal("Digite sua senha para continuar.")
        })
      })
    })
  })