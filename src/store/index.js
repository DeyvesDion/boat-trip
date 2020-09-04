import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boatsType: [
      { value: null, text: "Type de bateau" },
      { value: "Voilier", text: "Voilier", description: "ok" },
      { value: "Bateau à moteur", text: "Bateau à moteur" },
      { value: "Catamaran", text: "Catamaran" },
      { value: "Semi-rigide", text: "Semi-rigide" },
    ],
    boats: [
      {
        name: "Voilier",
        description:
          "Louez votre voilier à un particulier ou un loueur professionnel.",
      },
      {
        name: "Bateau à moteur",
        description:
          "La location de bateau à moteur entre particuliers et à un professionnel n’a jamais été aussi simple.",
      },
      {
        name: "Catamaran",
        description:
          "Louez votre Catamaran à un particulier ou un loueur professionnel.",
      },
      {
        name: "Semi-rigide",
        description:
          "Louez votre Semi-rigide à un particulier ou un loueur professionnel.",
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
