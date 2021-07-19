import Vue from 'vue'
import Vuex from 'vuex'
import {SEARCH_CONTACT} from '@/constant'
import {searchContact} from '@/api/SearchAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
  },
  mutations: {
    [SEARCH_CONTACT]: (state, payload) => {
      state.contacts = payload.contacts;
    }
  },
  actions: {
    async [SEARCH_CONTACT]({commit}, payload){
      const response = await searchContact(payload.name);
      commit(SEARCH_CONTACT, {contacts: response.data});
    }
  },
  modules: {
  }
})
