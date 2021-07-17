<template>
    <div class="goods">
        <goods-list-item 
            v-for="item in goods" :goods-item="item" class="item">
        </goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    name:'GoodsList',
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }    
}
</script>

<style>
    .goods{
        display: flex;
        flex-wrap: wrap;/*设置是否包裹*/ 
        justify-content: space-around;
    }

    .goods .item{
        width:48%;
    }


</style>