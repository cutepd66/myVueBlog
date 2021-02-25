import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入全局的css文件
import './assets/global.css'

//导入iconfont需要的js文件
import './assets/iconfont.js'

import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')