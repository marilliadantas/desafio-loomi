import partidas from "../../support/pages/partidasPage";
import home from "../../support/pages/homePage";
import { partial } from "cypress/types/lodash";

  describe("Validar partidas", () => {
    beforeEach(() => {
      cy.realizarLogin()
    })

    afterEach(() => {
      cy.logout()
    })

    it.only('CT23 - Favoritar partidas', () => {
      partidas.clicarBtnFavoritar()
      home.acessarFavoritos()
      partidas.validarPartida()
    })
    
    it('CT24 - Desfavoritar partida', () => {
      partidas.clicarBtnFavoritar()
      home.acessarFavoritos()
      partidas.validarPartida()
    })

    it('CT25 - Adicionar partida ao calendário', () => {
      partidas.clicarBtnAddCalendario()
      home.acessarFavoritos()
    })

    it('CT26 - Remover partida do calendário', () => {
      
    })
})