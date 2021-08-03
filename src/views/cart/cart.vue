<template>
    <div class="cart">
        <!--导航-->
        <nav-bar class="nav-bar">
            <div slot="center">购物车（{{length}}）</div>
        </nav-bar>

        <!--商品列表-->
        <cart-list/>

        <!--底部汇总-->
        <cart-bottom-bar/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/cartList'
import CartBottomBar from './childComps/cartBottomBar'
import {mapGetters} from 'vuex'

export default {
    name:"Cart",
    components:{
        NavBar,
        CartList,
        CartBottomBar
    },
    computed:{
        ...mapGetters({
            length:'cartLength',
            list:'cartList'
        })
    }
}
</script>

<style scoped>
    .nav-bar{
        color: #fff;
        background-color:orange
    }
</style>