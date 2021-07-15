import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('views/home/Home')
const Category = ()=>import('views/category/category')
const Cart = ()=>import('views/cart/cart')
const Profile = ()=>import('views/profile/profile')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    }
]
const router = new VueRouter({
    routes
})

export default router