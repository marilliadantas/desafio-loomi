import home from "../../support/pages/homePage";

  describe("Validar filtros da home", () => {
    beforeEach(() => {
      cy.realizarLogin()
    })

    afterEach(() => {
      cy.logout()
    })

    it('CT17 - Buscar por um time válido', () => {
      home.ValidarFiltroDeBusca("Time", "AA Flamengo").then((mensagem) => {
        expect(mensagem).to.eq("AA Flamengo")
      })
    })
    
    it('CT19 - Buscar por campeonato válido', () => {
      home.ValidarFiltroDeBusca("Campeonato", "Brasileirão Série A").then((mensagem) => {
        expect(mensagem).to.eq("Brasileirão Série A")
      })
    })
})