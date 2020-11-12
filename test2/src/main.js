import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as THREE from "mxreality.js/build/three";
import {
  VR,
  AVR
} from "mxreality.js/build/mxreality";
import * as Hls from "mxreality.js/build/hls";

import VueCookies from 'vue-cookies'
import Vuex from 'vuex'



Vue.use(Vuex)
Vue.use(VueCookies)


Vue.config.productionTip = false

window.THREE = THREE; // 重要，不设置则会报未定义错误！！！！！！
window.Hls = Hls;
window.VR = VR;
window.AVR = AVR
new Vue({
  router,

  render: h => h(App)
}).$mount('#app')