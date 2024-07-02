import partidas from "../../support/pages/partidasPage";
import home from "../../support/pages/homePage";

  describe("Validar partidas", () => {
    beforeEach(() => {
      cy.login()
    })

    afterEach(() => {
      cy.logout()
    })

    it('CT23 - Favoritar partidas', () => {
      partidas.clicarFavoritar()
      partidas.validarPartidaFavoritada().then((src) => {
        expect(src).to.eq("/_next/static/media/star-filled.700fc2a2.svg");
      })
      cy.desfavoritarPartida()
    })
    
    it('CT24 - Desfavoritar partida', () => {
      cy.favoritarPartida()
      home.acessarPartidas()
      partidas.clicarFavoritar()
      partidas.validarPartidaDesfavoritada().then((src) => {
        expect(src).to.eq("/_next/static/media/star.756e2d2a.svg");
      })
    })

    it('CT25 - Adicionar partida ao calendário', () => {
      partidas.clicarAdicionarCalendario()
      partidas.validarPartidaAdicionada().then((src) => {
        expect(src).to.eq("/_next/static/media/add-calendar-filled.cfbaa349.svg");
      })
      cy.removerPartidaCalendario()
    })

    it('CT26 - Remover partida do calendário', () => {
      cy.adicionarPartidaCalendario()
      home.acessarPartidas()
      partidas.clicarAdicionarCalendario()
      partidas.validarPartidaRemovida().then((src) => {
        expect(src).to.eq("/_next/static/media/add-calendar.b040970f.svg");
      })
    })
})