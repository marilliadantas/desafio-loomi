import home from "../../support/pages/homePage";
import perfil from "../../support/pages/perfilPage";

describe("Validar perfil", () => {
  beforeEach(() => {
    cy.criarConta()
  })

  context("Perfil - Editar", () => {
    afterEach(() => {
      cy.excluirConta()
    })

    it("CT45 - Editar nome no perfil", () => {
      home.abrirModal()
      perfil.clicarBtnEditarPerfil()
      perfil.editarNome("Editando nome")
      perfil.validarMsgSucesso().then((mensagem) => {
        expect(mensagem).to.eq("Perfil atualizado com sucesso!")
      })
      home.fecharAlerta()
    })
  })

  context("Perfil - Excluir", () => {
    it("CT46 - Excluir perfil", () => {
      home.abrirModal()
      perfil.clicarBtnExcluirConta()
      perfil.validaMsgConfirmacao().then((text) => {
        expect(text).eq("Você tem certeza que deseja excluir sua conta? Esta ação é irreversível e você perderá todos os dados salvos nela. "
        )
      })
      perfil.clicarBtnExcluir()
      perfil.validarMsgSucesso().then((text) => {
        expect(text).eq("Conta deletada com sucesso!")
      })
      home.fecharAlerta()
    })
  })
})