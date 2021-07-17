<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">{{title}}</div>
        </nav-bar>
        <scroll 
            class="content" ref="scroll" :probe-type="3"
            @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
            <home-swiper :banners="banners" v-if="banners.length"/>
            <home-recommend :recommends="recommends"/>
            <feature-view></feature-view>
            <tab-control  class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick">
            </tab-control>
            <goods-list :goods="showGoods"></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

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
            currentType:'pop',
            isShowBackTop:false
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommend,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
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
        backClick(){
            this.$refs.scroll.scrollTo(0,0,300)
        },
        contentScroll(position){
            this.isShowBackTop = -position.y > 1000
        },
        loadMore(){
            this.getHomeGoods(this.currentType)
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

                this.$refs.scroll.finish()
            })
        }
    }
}
</script>

<style scoped>
    #home{
        position: relative;
        height: 100vh;
    }
    .home-nav{
        background-color: orange;
        color: #fff;
        display: flex;
        text-align: center;
    }
    .tab-control{
        position: relative;
        z-index: 2;
    }
    /*.content{
        position: absolute;
        top:44px;
        bottom: 49px;
        left:0;
        right: 0;
    }*/
    .content{
        height: 100vh;
        overflow: hidden;
    }
</style>