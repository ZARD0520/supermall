<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"></detail-nav-bar>
        <scroll class="content" ref="scroll">
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
            <detail-param-info :param-info="paramInfo"/>
        </scroll>
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'

import Scroll from 'components/common/scroll/Scroll'

import {getDetail,Goods,Shop,GoodsParam} from 'network/detail'

export default {
    name:'detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        Scroll
    },
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            detailInfo: {},
            shop:{},
            paramInfo:{}
        }
    },
    created(){
        this.iid = this.$route.query.iid
        getDetail(this.iid).then(res=>{
            const data = res.result
            //获取顶部图片的轮播数据
            this.topImages = data.itemInfo.topImages

            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

            this.shop = new Shop(data.shopInfo)

            this.detailInfo = data.detailInfo

            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        })
    },
    methods:{
        imgLoad(){
            this.$refs.scroll.refresh()
        }
    }
}
</script>

<style scoped>
    #detail{
        height: 100vh;
        position: relative;
        z-index: 9;
        background-color: #fff;
    }

    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }

    .content{
        height: calc(100% - 44px);
    }
</style>