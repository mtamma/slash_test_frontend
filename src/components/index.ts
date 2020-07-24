import Vue from 'vue'
import defaultLayout from './layout/default/default.vue'

export default {
    init: () => {
        Vue.component('default-layout', defaultLayout);
    }
}