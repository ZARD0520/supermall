<template>
    <swiper class="detail-swiper">
        <swiper-item v-for="item in topImages" class="swiper-item">
            <img :src="item" alt="" @load="dLoad">
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'

export default {
    name:'DetailSwiper',
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
        dLoad(){
            console.log('1');
        }
    }
}
</script>

<style scoped>
    .swiper-item{
        height: 300px;
        overflow: hidden;
    }
</style>