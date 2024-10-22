let el = require("../elements/homeElements").home
const { loadPage, click, get_text, get_text_index, set, clickForce, waitElement} = require("../actions")

export default {
  acessarPagina() {
    loadPage(el.url)
  },

  abrirModal() {
    waitElement(el.btnEntrar)
    click(el.btnEntrar)
  },

  ValidarPesquisa(option, nome) {
    switch (option) {
      case "Time":
        waitElement(el.filtroTime)
        click(el.filtroTime)
        if (nome) {
          set(el.filtroTime, nome)
        }
        cy.wait(2500)
        return get_text_index(el.lista, 0)
      case "Campeonato":
        waitElement(el.filtroCampeonato)
        click(el.filtroCampeonato)
        if (nome) {
          set(el.filtroCampeonato, nome)
        }
        cy.wait(2500)
        return get_text_index(el.lista, 0)
      default:
        "Favor informar uma opção válida"
    }
  },

  validarUsuarioLogado() {
    return get_text(el.nomeUsuario)
  },

  validarMsg() {
    return get_text(el.msg)
  },

  acessarFavoritos() {
    click(el.paginaFavoritos)
  },

  fecharAlerta() {
    clickForce(el.fecharAlerta)
  },

  acessarMelhoresMomentos() {
    click(el.paginaMelhoresMomentos)
  },

  acessarPartidas() {
    clickForce(el.paginaPartidas)
  },

  acessarCalendario() {
    waitElement(el.paginaCalendario)
    clickForce(el.paginaCalendario)
  }
}