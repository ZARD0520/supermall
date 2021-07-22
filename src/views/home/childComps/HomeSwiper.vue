<template>
    <swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" @load="imageLoad" alt=""/>
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name:'HomeSwiper',
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            isLoad:false
        }
    },
    components:{
        Swiper,SwiperItem
    },
    methods:{
        imageLoad(){
            if(!this.isLoad){
                this.$emit('imageLoad');
                this.isLoad = true;
            }
        }
    }
}
</script>

<style scoped>

</style>