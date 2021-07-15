<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String
        }
    },
    data(){
        return{

        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
    .tab-bar-item{
        flex:1;
        text-align: center;
        height: 49px;
    }
    .tab-bar-item img{ 
        height: 24px;
        width: 24px;
        margin-top:3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
    .tab-bar-item div{
        font-size: 6px;
    }
</style>