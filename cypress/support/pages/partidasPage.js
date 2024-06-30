let el = require('../elements/partidasElements').partidas
const { click_index, get_text_index } = require('../actions');

export default {
    clicarBtnFavoritar() {
        click_index(el.btnFavoritar, 0)
    },

    validarPartida() {
        return cy.get(el.partidaFavoritada).invoke('text')
    },

    clicarBtnAddCalendario() {
        click_index(el.btnFavoritar, 1)
    }
}