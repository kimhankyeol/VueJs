import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import StatusComponent from './Status.vue'

//여기에서 컴포넌트를 선언
//Vue.component('컴포넌트명',옵션)
//AppStatus 는 어떤 파일에서든 쓸수 있음
Vue.component('AppStatus', StatusComponent)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

//Vue를 새로 선언해줌 
//Vue 를 새로 생성해서 전체 어플리케이션이 돌아간다고 보면됨