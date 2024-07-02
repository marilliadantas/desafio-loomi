import { fakerPT_BR as faker } from "@faker-js/faker";
import home from "../support/pages/homePage"
import modal from "../support/pages/modalPage";
import login from "../support/pages/loginPage";
import cadastro from "../support/pages/cadastroPage";
import perfil from "../support/pages/perfilPage";
import favoritos from "../support/pages/favoritosPage";
import partidas from "../support/pages/partidasPage";

Cypress.Commands.add("login", () => {
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
  const email = faker.internet.email()

  home.acessarPagina()
  home.abrirModal()
  modal.clicarBtnCriarConta()
  cadastro.preencherCadastro("Conta excluir", email, "Teste123", "Teste123")
  cadastro.clicarCriarConta()
  home.fecharAlerta()
})

Cypress.Commands.add("excluirConta", () => {
  home.abrirModal()
  perfil.clicarBtnExcluirConta()
  perfil.clicarBtnExcluir()
  home.fecharAlerta()
})

Cypress.Commands.add("favoritarTime", () => {
  favoritos.validarPesquisa("Time", "Flamengo", 3)
})

Cypress.Commands.add("favoritarCanal", () => {
  favoritos.validarPesquisa("Canal", "Apple TV", 0)
})

Cypress.Commands.add("removerTime", () => {
  favoritos.clicarEditar()
  favoritos.clicarExcluirTime()
  favoritos.clicarSalvar()
})

Cypress.Commands.add("removerCanal", () => {
  favoritos.clicarEditarCanal()
  favoritos.clicarExcluirCanal()
  favoritos.clicarConcluir()
})

Cypress.Commands.add("favoritarPartida", () => {
  partidas.clicarFavoritar()
  home.acessarFavoritos()
})

Cypress.Commands.add("desfavoritarPartida", () => {
  home.acessarFavoritos()
  favoritos.clicarFavoritar()
})