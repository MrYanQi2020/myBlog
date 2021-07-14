import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import showMessage from "@/utils/showMessage"
import "@/Mock"


Vue.prototype.$showMessage=showMessage;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


