import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DPlayer from 'dplayer';
import 'vue-dplayer/dist/vue-dplayer.css'
import VueDPlayer from 'vue-dplayer'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
