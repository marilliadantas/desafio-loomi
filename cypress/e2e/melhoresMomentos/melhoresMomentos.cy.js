import home from "../../support/pages/homePage";
import melhoresMomentos from "../../support/pages/melhoresMomentosPage";

  describe("Validar melhores momentos", () => {
    beforeEach(() => {
      cy.realizarLogin()
      home.acessarMelhoresMomentos()
      melhoresMomentos.validaPaginaMelhoresMomentos()
    })

    afterEach(() => {
      cy.logout()
    })

    it('CT37 - Filtrar por time válido', () => {
      melhoresMomentos.validarFiltroDeBusca("Time", "Flamengo")
      melhoresMomentos.validarListaCards(30)
    })

    it('CT38 - Filtrar por time inválido', () => {
      melhoresMomentos.validarFiltroDeBusca("Inválido", "Teste", 0)
      melhoresMomentos.validarMsgSemResultados().then((mensagem) => {
        expect(mensagem).to.eq("Nenhum time foi encontrado")
      })
    })

    it('CT39 - Filtrar por campeonato válido', () => {
      melhoresMomentos.validarFiltroDeBusca("Campeonato", "Euro")
      melhoresMomentos.validarListaCards(30)
    })

    it('CT40 - Filtrar por campeonato inválido', () => {
      melhoresMomentos.validarFiltroDeBusca("Inválido", "Teste", 1)
      melhoresMomentos.validarMsgSemResultados().then((mensagem) => {
        expect(mensagem).to.eq("Nenhum campeonato foi encontrado")
      })
    })
})