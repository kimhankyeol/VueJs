import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//부모 자식간이 아닌 컴포넌트 사이의 통신 Event Bus  
export const eventBus = new Vue({
    methods: {
        userWasEdited(date) {
            eventBus.$emit("userWasEdited", date) //userWasEdited 신호가 이벤트 버스로 수정한 시간과 전달이 됨     
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')