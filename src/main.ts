import Vue from 'vue'
import App from '@/components/app/app.vue'
import router from './router'
import store from './store'
import init from '@/init'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false
init.init();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
