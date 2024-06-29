import home from "../support/pages/homePage"
import modal from "../support/pages/modalPage";
import login from "../support/pages/loginPage";
import cadastro from "../support/pages/cadastroPage";
import perfil from "../support/pages/perfilPage";

Cypress.Commands.add("realizarLogin", () => {
  home.acessarPagina()
  home.abrirModal()
  modal.validarModal()
  login.preencherLogin(Cypress.env("email"), Cypress.env("senha"))
  login.clicarLogin()
})

Cypress.Commands.add("logout", () => {
    home.abrirModal()
    modal.clicarBtnSair()
})

Cypress.Commands.add("criarConta", () => {  
  home.acessarPagina()
  home.abrirModal()
  modal.clicarBtnCriarConta()
  cadastro.preencherCadastro("Conta excluir", "emailexcluir@teste.com", "Teste123", "Teste123")
  cadastro.clicarCriarConta()
  home.validarMsg().then((text) => {
    expect(text).eq('Cadastro realizado com sucesso! Verifique seu e-mail para ativar sua conta.')
  })
})

Cypress.Commands.add("excluirConta", () => {
  perfil.clicarBtnExcluirConta()
  perfil.validaMsgConfirmacao().then((text) => {
    expect(text).eq('Você tem certeza que deseja excluir sua conta? Esta ação é irreversível e você perderá todos os dados salvos nela. ')
  })
  perfil.clicarBtnExcluir()
  perfil.validarMsgSucesso().then((text) => {
    expect(text).eq('Conta deletada com sucesso!')
  })
})