import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAr4ik6Rhf806E8XyeOAZeOybiluxnJobQ',
      authDomain: 'vue-projects-7a542.firebaseapp.com',
      databaseURL: 'https://vue-projects-7a542.firebaseio.com',
      projectId: 'vue-projects-7a542',
      storageBucket: 'vue-projects-7a542.appspot.com'
    })
  }
})
