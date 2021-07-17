<template>
    <!--ref/children-->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Scroll',
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            observeDOM:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
        this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
          })
    },
    methods:{
        scrollTo(x,y,ms){
            this.scroll.scrollTo(x,y,ms)
        },
        finish(){
            this.scroll.finishPullUp()
        }
    }
}
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
  }
</style>