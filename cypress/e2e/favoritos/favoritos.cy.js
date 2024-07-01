import home from "../../support/pages/homePage";
import favoritos from "../../support/pages/favoritosPage"

  describe("Validar favoritos", () => {
    beforeEach(() => {
      cy.realizarLogin()
      home.acessarFavoritos()
      favoritos.validaPaginaFavoritos()
    })

    afterEach(() => {
      cy.removerTime()
      cy.logout()
    })

    it.only('CT29 - Adicionar times', () => {
      favoritos.validarFiltroDeBusca("Time", "Flamengo")
      favoritos.validarTimeAdicionado().then((mensagem) => {
        expect(mensagem).to.eq("Flamengo")
      })
    })
    
    it('CT30 - Remover times', () => {
      
    })

    it('CT31- Adicionar canais favoritos', () => {
      
    })

    it('CT32 - Remover canais favoritos', () => {
      
    })

    it('CT34 - Habilitar partidas favoritas', () => {
      
    })

    it('CT35 - Desabilitar partidas favoritas', () => {
      
    })
})