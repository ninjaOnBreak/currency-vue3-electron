// import Vue from 'vue';
// import Vuex from 'vuex';
// import axios from 'axios';
// import VueAxios from 'vue-axios';

// app.use(Vuex);
// Vue.use(VueAxios, axios);

// export default new Vuex.Store({
//   modules: {
//     CurrencyModule,
//   },
// });

import { createStore } from 'vuex';

import CurrencyModule from './currencies';

export default createStore({
  modules: {
    CurrencyModule,
  },
});
