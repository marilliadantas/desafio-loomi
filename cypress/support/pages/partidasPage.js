let el = require('../elements/partidasElements').partidas
const { click_index, listLength, getImg } = require('../actions');

export default {
    clicarFavoritar() {
        click_index(el.btnFavoritar, 0)
    },

    validarPartida(qtd) {
        return listLength(el.partidaFavorita, qtd)
    },

    validarPartidaFavoritada() {
        return getImg(el.partidaFavoritada)
    },

    validarPartidaDesfavoritada() {
        return getImg(el.partidaDesfavoritada)
    }

    // clicarBtnAddCalendario() {
    //     click_index(el.btnFavoritar, 1)
    // },

    // validarPartidaCalendario() {
    //     cy.get(el.partidaAdicionada).eq(1).should('be.visible')
    // }
}