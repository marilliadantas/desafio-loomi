let el = require('../elements/melhoresMomentosElements').melhoresMomentos
const {click, set, get_text, get_text_index } = require('../actions');

export default {
   validaPaginaMelhoresMomentos() {
       return get_text(el.titulo)
    },
}