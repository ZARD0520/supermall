<template>
    <div class="home-recommend">
        <div v-for="item in recommends" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt=""/>
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommends:{
            type:Array,
            default(){
                return
            }
        }
    }
}
</script>

<style>
    .home-recommend{
        display: flex;
        width: 100%;
        text-align: center;
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        flex:1;
    }
    .recommend-item img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
    .recommend-item div{
        font-size: 12px;
    }
</style>