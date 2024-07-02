import { fakerPT_BR as faker } from "@faker-js/faker";
import home from "../../support/pages/homePage";
import modal from "../../support/pages/modalPage";
import cadastro from "../../support/pages/cadastroPage";

const nome = faker.person.fullName()
const email = faker.internet.email()
const senha = faker.internet.password(6)

describe("Validar cadastro", () => {
  beforeEach(() => {
    home.acessarPagina()
    home.abrirModal()
    modal.clicarBtnCriarConta()
    modal.validarModal()
  })

  context("Cadastro - Fluxo principal", () => {
    afterEach(() => {
      cy.logout()
    })

    it("CT01 - Cadastro com sucesso", () => {
      cadastro.preencherCadastro(nome, email, senha, senha)
      cadastro.clicarCriarConta()
      home.validarMsg().then((text) => {
        expect(text).eq(
          "Cadastro realizado com sucesso! Verifique seu e-mail para ativar sua conta."
        )
      })
      home.fecharAlerta()
    })
  })

  context("Cadastro - Fluxos de exceção", () => {
    it("CT07 - Cadastro com e-mail já cadastrado", () => {
      cadastro.preencherCadastro(nome, Cypress.env("email"), senha, senha)
      cadastro.clicarCriarConta()
      home.validarMsg().then((text) => {
        expect(text).eq(
          "Este endereço de email ja esta sendo utilizado, tente outro."
        )
      })
      home.fecharAlerta()
    })

    it("CT08 -Cadastro com nome vazio", () => {
      cadastro.preencherCadastro(null, email, senha, senha)
      cadastro.clicarCriarConta()
      cadastro.validarAlerta().then((text) => {
        expect(text).eq("Digite um nome para continuar.")
      })
    })

    it("CT09 - Cadastro com e-mail inválido", () => {
      cadastro.preencherCadastro(nome, "emailinvalido@.com", senha, senha)
      cadastro.clicarCriarConta()
      cadastro.validarAlerta().then((text) => {
        expect(text).eq("Digite um e-mail válido.")
      })
    })

    it("CT10 - Cadastro com e-mail vazio", () => {
      cadastro.preencherCadastro(nome, null, senha, senha)
      cadastro.clicarCriarConta()
      cadastro.validarAlerta().then((text) => {
        expect(text).eq("Digite um e-mail para continuar.")
      })
    })

    it("CT11 - Cadastro com senha vazio", () => {
      cadastro.preencherCadastro(nome, email, null, senha)
      cadastro.clicarCriarConta()
      cadastro.validarAlerta2(0).then((text) => {
        expect(text).eq("Digite uma senha para continuar.")
      })
    })

    it("CT12 - Cadastro com senha com 5 caracteres", () => {
      cadastro.preencherCadastro(nome, email, "test1", "test1")
      cadastro.clicarCriarConta()
      cadastro.validarAlerta2(0).then((text) => {
        expect(text).eq("Sua senha deve ter no mínimo 6 caracteres.")
      })
    })

    it("CT13 - Cadastro com confirmar senha divergente", () => {
      cadastro.preencherCadastro(nome, email, senha, "senhaDivergente1")
      cadastro.clicarCriarConta()
      cadastro.validarAlerta2(0).then((text) => {
        expect(text).eq("As senhas devem ser iguais.")
      })
    })

    it("CT14 - Cadastro com confirmar senha vazio", () => {
      cadastro.preencherCadastro(nome, email, senha, null)
      cadastro.clicarCriarConta()
      cadastro.validarAlerta2(0).then((text) => {
        expect(text).eq("As senhas devem ser iguais.")
      })
    })

    it("CT15 - Cadastro com todos os campos vazios", () => {
      cadastro.preencherCadastro(null, null, null, null)
      cadastro.clicarCriarConta()
      cadastro.msgsAlerta().then(([msg1, msg2, msg3]) => {
        expect(msg1).to.equal("Digite um nome para continuar.")
        expect(msg2).to.equal("Digite um e-mail para continuar.")
        expect(msg3).to.equal("Digite uma senha para continuar")
      })
    })

    it("CT16 - Cancelar cadastro", () => {
      cadastro.preencherCadastro(nome, email, senha, senha)
      cadastro.clicarCancelarConta()
      modal.validarModal().then((text) => {
        expect(text).eq("Entrar")
      })
    })
  })
})