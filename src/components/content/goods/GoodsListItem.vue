<template>
    <div class="goods-item" @click="itemClick">
        <img v-lazy="showImage" alt="" @load="imageLoad"/>
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      imageLoad(){
        //图片加载完的通知传到Home组件有三种方法
        //逐层传递、Vuex、事件总线
        this.$bus.$emit('ImageLoad')
      },
      itemClick(){
        //跳转到详情页
        //this.$router.push('/detail?'+this.goodsItem.iid)
        //query方式
        const iid = this.goodsItem.iid;
        this.$router.push({
          path:'/detail',
          query:{iid}
        })
      }
    }
}
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }

  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 10px;
    font-size: 10px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
    font-size: 12px;
  }

  .goods-info .collect {
    position: relative;
    font-size: 12px;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>