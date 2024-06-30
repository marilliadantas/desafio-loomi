let el = require('../elements/homeElements').home
const { loadPage, click, get_text, get_text_index, set } = require('../actions');

export default {
    acessarPagina() {
        loadPage(el.url)
    },

    abrirModal() {
        cy.wait(3000)
        click(el.btnEntrar)
    },
    
    ValidarFiltroDeBusca(option, nome) {
    cy.wait(2000)
    switch(option){
        case 'Time':
            click(el.filtroTime)
            if (nome !== null) {
                set(el.filtroTime, nome)
            }
            cy.wait(2000)
            return get_text_index(el.lista, 0)
        case 'Campeonato':
            click(el.filtroCampeonato)
            if (nome !== null) {
                set(el.filtroCampeonato, nome)
            }
            cy.wait(2000)
            return get_text_index(el.lista, 0)
        // case 'Streaming':
        //     click(el.filtroStreaming)
        //     set(el.filtroStreaming, 'Apple TV')
        //     cy.wait(1000)
        //     return get_text_index(el.lista, 0)
        default:
            'Favor informar uma opção válida'
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

    acessarMelhoresMomentos() {
        click(el.paginaMelhoresMomentos)
    }
}