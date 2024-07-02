import home from "../../support/pages/homePage";
import calendario from "../../support/pages/calendarioPage";

  describe("Validar calendário", () => {
    beforeEach(() => {
      cy.login()
      home.acessarCalendario()
    })

    afterEach(() => {
      cy.logout()
    })
    
    it('CT50 - Filtrar por time inválido', () => {
      calendario.validarFiltroDeBusca("TimeInvalido", "Flaegmas", 0)
      calendario.validarMsgSemResultado().then((mensagem) => {
        expect(mensagem).to.eq("Nenhum time foi encontrado")
      })
    })

    it('CT52 - Filtrar por campeonato inválido', () => {
      calendario.validarFiltroDeBusca("CampeonatoInvalido", "Brasldhaj", 1)
      calendario.validarMsgSemResultado().then((mensagem) => {
        expect(mensagem).to.eq("Nenhum campeonato foi encontrado")
      })
    })
})