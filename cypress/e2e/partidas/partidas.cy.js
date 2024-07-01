import partidas from "../../support/pages/partidasPage";
import home from "../../support/pages/homePage";

  describe("Validar partidas", () => {
    beforeEach(() => {
      cy.realizarLogin()
    })

    afterEach(() => {
      cy.logout()
    })

    it('CT23 - Favoritar partidas', () => {
      partidas.clicarBtnFavoritar()
      home.acessarFavoritos()
      partidas.validarPartida()
    })
    
    it('CT24 - Desfavoritar partida', () => {
      partidas.clicarBtnFavoritar()
      home.acessarFavoritos()
      partidas.validarPartida()
    })

    it.only('CT25 - Adicionar partida ao calendário', () => {
      partidas.clicarBtnAddCalendario()
      partidas.validarPartidaCalendario()
    })

    it('CT26 - Remover partida do calendário', () => {
      
    })
})