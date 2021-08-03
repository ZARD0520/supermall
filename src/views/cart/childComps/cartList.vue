<template>
    <div class="cart-list">
        <scroll class="content" ref="scroll">
            <cart-list-item v-for="(item,index) in cartList" 
                :item-info="item" :key="index"/>
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './cartListItem'
import {mapGetters} from 'vuex'

export default {
    name:"CartList",
    components:{
        Scroll,
        CartListItem
    },
    computed:{
        ...mapGetters(['cartList'])
    },
    activated(){
        this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>
    .cart-list{
        position: absolute;
        top:44px;
        left: 0;
        right: 0;
        bottom: 93px;
    }
    .content{
        height: 100%;
        overflow: hidden;
    }
    .nav-bar{
        background-color: #fff;
        color: #000;
    }
</style>