import home from "../../support/pages/homePage";
import melhoresMomentos from "../../support/pages/melhoresMomentosPage";

  describe("Validar melhores momentos", () => {
    beforeEach(() => {
      cy.realizarLogin()
    })

    afterEach(() => {
      cy.logout()
    })

    it('CT37 - Filtrar por time válido', () => {
      home.acessarMelhoresMomentos()
      melhoresMomentos.validaPaginaMelhoresMomentos().then((text) => {
        expect(text).eq('Melhores momentos das Partidas Finalizadas')
    })

    it('CT38 - Filtrar por time inválido', () => {
      
    })

    it('CT39 - Filtrar por campeonato válido', () => {
      
    })

    it('CT40 - Filtrar por campeonato inválido', () => {
      
    })
  })
})