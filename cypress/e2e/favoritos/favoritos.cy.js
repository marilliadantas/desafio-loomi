import home from "../../support/pages/homePage";
import favoritos from "../../support/pages/favoritosPage";

describe("Validar favoritos", () => {
  beforeEach(() => {
    cy.login()
    home.acessarFavoritos()
    favoritos.validarPagina().then((text) => {
      expect(text).eq('Partidas favoritas')
    })
  })

  afterEach(() => {
    cy.logout()
  })

  it("CT29 - Adicionar times", () => {
    favoritos.validarPesquisa("Time", "Flamengo", 3)
    favoritos.validarTimeAdicionado().then((mensagem) => {
      expect(mensagem).to.eq("Flamengo")
    })
    cy.removerTime()
  })

  it("CT30 - Remover times", () => {
    cy.favoritarTime()
    favoritos.clicarEditar()
    favoritos.clicarExcluirTime()
    favoritos.clicarSalvar()
    favoritos.validarTimeRemovido().then((mensagem) => {
      expect(mensagem).to.eq("Atualmente você não favoritou times")
    })
  })

  it("CT31- Adicionar canais favoritos", () => {
    favoritos.validarPesquisa("Canal", "Apple TV", 0)
    favoritos.validarCanalAdicionado().then((mensagem) => {
      expect(mensagem).to.eq("Apple TV")
    })
    cy.removerCanal()
  })

  it("CT32 - Remover canais favoritos", () => {
    cy.favoritarCanal()
    favoritos.clicarEditarCanal()
    favoritos.clicarExcluirCanal()
    favoritos.clicarConcluir()
    favoritos.validarCanalRemovido().then((mensagem) => {
      expect(mensagem).to.eq("Atualmente você não favoritou canais")
    })
  })

  // it('CT34 - Habilitar partidas favoritas', () => {

  // })

  // it('CT35 - Desabilitar partidas favoritas', () => {

  // })
})