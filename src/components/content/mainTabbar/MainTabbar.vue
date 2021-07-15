<template>
    <tab-bar>
        <tab-bar-item :path=item.path v-for="item in itemList" activeColor="orange">
            <img slot="item-icon" :src="item.src1" alt="">
            <img slot="item-icon-active" :src="item.src2" alt="">
            <div slot="item-text">{{item.name}}</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/Tabbar'
import TabBarItem from 'components/common/tabbar/TabbarItem'

export default {
    name:'MainTabBar',
    data(){
        return{
            itemList:[
                {
                    path:'/home',
                    name:'首页',
                    src1:require('assets/img/tabbar/first.png'),
                    src2:require('assets/img/tabbar/first1.png')
                },{
                    path:'/category',
                    name:'分类',
                    src1:require('assets/img/tabbar/分类.png'),
                    src2:require('assets/img/tabbar/分类1.png')
                },{
                    path:'/cart',
                    name:'购物车',
                    src1:require('assets/img/tabbar/购物车.png'),
                    src2:require('assets/img/tabbar/购物车1.png')
                },{
                    path:'/profile',
                    name:'我的',
                    src1:require('assets/img/tabbar/我的.png'),
                    src2:require('assets/img/tabbar/我的1.png')
                }
            ]
        }
    },
    components:{
        TabBar,
        TabBarItem
    }

}
</script>