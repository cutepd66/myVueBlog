import Vue from 'vue'
import VueRouter from 'vue-router'
//导入Home组件
import Home from '../components/Home.vue'
//导入文章详情页
import Article from '../components/Article.vue'
//导入关于组件
import About from '../components/About.vue'
//导入登录组件
import Login from '../components/Login.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/article', component: Article },
    { path: '/about', component: About },
    { path: '/login', component: Login }
]

const router = new VueRouter({
    routes
})

export default router