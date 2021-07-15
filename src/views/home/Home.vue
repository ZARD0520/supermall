<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="content">{{title}}</div>
        </nav-bar>
        <home-swiper :banners="banners"/>
        <home-recommend :recommends="recommends"/>
        <feature-view/>
        <tab-control  
            class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
        <goods-list :goods="showGoods"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import FeatureView from './childComps/FeatureView'

import {getHomeMultidata,getHomeGoods} from 'network/homeRequest'


export default {
    name:"Home",
    data(){
        return{
            title:'淘酷城',
            banners:[],
            recommends:[],
            /*分页设计*/ 
            goods:{
                'pop':{page:1,list:[]},
                'new':{page:1,list:[]},
                'sell':{page:1,list:[]}
            },
            currentType:'pop'
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommend,
        FeatureView,
        TabControl,
        GoodsList
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    created(){
        this.getHomeMultidata()

        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    methods:{
        /**
         * 监听事件
         */
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
        },


        /**
         * 网络请求数据
         */
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        },
        getHomeGoods(type){
            const page = this.goods[type].page
            getHomeGoods(type,page).then(res=>{
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page +=1
            })
        }
    }
}
</script>

<style scoped>
    #home{
        padding-top: 44px;
        position: relative;
        height: 100vh;
    }
    .home-nav{
        background-color: orange;
        color: #fff;
        box-shadow: 0 1px 1px rgba(160,160,0.1);
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        z-index: 2;
    }
    .tab-control{
        position: sticky;
        top:44px;
        background-color: #fff;
        z-index: 2;
    }
</style>