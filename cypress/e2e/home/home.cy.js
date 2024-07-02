import home from "../../support/pages/homePage";

describe("Validar filtros da home", () => {
  beforeEach(() => {
    cy.login()
  })

  afterEach(() => {
    cy.logout()
  })

  it("CT17 - Buscar por um time válido", () => {
    home.ValidarPesquisa("Time", "AA Flamengo").then((mensagem) => {
      expect(mensagem).to.eq("AA Flamengo")
    })
  })

  it("CT19 - Buscar por campeonato válido", () => {
    home.ValidarPesquisa("Campeonato", "Brasileirão Série A").then((mensagem) => {
        expect(mensagem).to.eq("Brasileirão Série A")
    })
  })
})