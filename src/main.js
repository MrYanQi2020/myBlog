import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index.js"
import showMessage from "@/utils/showMessage"
import "@/Mock"

//创建全局自定义方法
Vue.prototype.$showMessage=showMessage;

// 创建全局自定义组件
import loading from "@/directives/loading"
Vue.directive('loading',loading);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


