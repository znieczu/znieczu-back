// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

import Carousel3d from 'vue-carousel-3d'
import 'vue-material-design-icons/styles.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import VueMq from 'vue-mq'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'fa'
})

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use(Carousel3d)
