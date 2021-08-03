<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @titleClick="titleClick"
             :current-index="currentIndex"></detail-nav-bar>
        <scroll class="content" ref="scroll" 
                @scroll="content-scroll" :probe-type="3">
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
            <detail-param-info ref="params" :param-info="paramInfo"/>
            <detail-comment-info ref="comment" :comment-info="commentInfo"/>
            <goods-list ref="recommend" :goods="recommends"/>
        </scroll>
        <detail-bottom-bar @addCart="addToCart"/>
        <back-top @click.native="backTop" v-show="isShowBackTop"/>
        <!--<toast :message="message" :show="show"/>-->
    </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'
//import Toast from 'components/common/toast/Toast'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import { debounce } from '../../common/utils/debounce'
import {backTopMixin} from '../../common/utils/mixin'
import {BACK_POSITION} from '../../common/utils/const'

import {mapActions} from 'vuex'

export default {
    name:'detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailBottomBar,
        Scroll,
        GoodsList,
        BackTop,
        //Toast
    },
    mixins:[backTopMixin]
    ,
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            detailInfo: {},
            shop:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],
            getThemeTopY:null,
            currentIndex:0,
            //message:'哈哈哈',
            //show:false
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

            if(data.rate.cRate !== 0){
                this.commentInfo = data.rate.list[0]
            }
        })
        getRecommend().then(res=>{
            this.recommends = res.data.list
        })

        this.getThemeTopY = debounce(()=>{
            this.themeTopYs = []
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
        },100)

        
    },
    mounted(){
        
    },
    updated(){
        /*
        this.themeTopYs = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        */
    },
    methods:{
        ...mapActions(['addCart']),
        imgLoad(){
            this.$refs.scroll.refresh()
            this.getThemeTopY()
        },
        titleClick(index){
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
        },
        contentScroll(position){
            //获取y值
            const positionY = -position.y

            //positionY和主题中的值进行对比
            let length = this.themeTopYs.length
            for (let i in this.themeTopYs) {
                /*if(positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1]){

                }*/
                //if判断可优化：往主题top数组中最后一个位置存放number最大值，那么可以省略一个判断条件
                if(this.currentIndex !==i && ((i<length-1 && positionY>=this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])
                    ||(i===length-1 && positionY >= this.themeTopYs))){
                        this.currentIndex = i;
                }
            }

            //是否显示回到顶部
            this.isShowBackTop = -position.y > BACK_POSITION
        },
        addToCart(){
            //获取购物车需要展示的信息
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.iid

            //商品添加到购物车
            //this.$store.commit('addCart',product)
            /*this.$store.dispatch('addCart',product).then(res=>{
                console.log(res);
            })*/
            this.addCart(product).then(res=>{/*
                this.show = true
                this.message = res

                setTimeout(()=>{
                    this.show = false
                    this.message = ''
                },1500)*/
                this.$toast.show(res,1500)
            })
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
        height: calc(100% - 44px - 49px);
    }
</style>