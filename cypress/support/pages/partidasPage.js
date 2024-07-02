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
    },

    clicarAdicionarCalendario() {
        click_index(el.btnAddCalendario, 1)
    },

    validarPartidaAdicionada() {
        return getImg(el.adicionadaCalendario)
    },

    validarPartidaRemovida() {
        return getImg(el.removidaCalendario)
    },
}