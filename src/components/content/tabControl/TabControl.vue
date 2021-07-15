<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" class="tab-control-item" 
            :class="{active:currentIndex === index}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return ['流行','新款','精选']
            }
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
    .tab-control{
        height: 100%;
        width: 100%;
        display: flex;
        text-align: center;
        line-height: 40px;
    }
    .tab-control-item{
        flex:1;
    }
    .tab-control-item span{
        font-size: 10px;
        padding: 5px;
    }
    .active{
        color:palevioletred;
    }
    .active span{
        border-bottom: 3px solid palevioletred;
    }
</style>