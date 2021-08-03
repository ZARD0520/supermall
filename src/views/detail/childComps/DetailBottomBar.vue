<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <p class="fz">客服</p>
            </div>
            <div>
                <i class="icon shop"></i>
                <p class="fz">店铺</p>
            </div>
            <div>
                <i class="icon select"></i>
                <p class="fz">收藏</p>
            </div>
            </div>
                <div class="bar-item bar-right">
                <div class="cart fz" @click="addToCart">加入购物车</div>
                <div class="buy fz">购买</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailBottomBar",
    methods:{
        addToCart(){
            this.$emit('addCart')
        }
    }
}
</script>

<style scoped>
    .bottom-bar{
        height: 49px;
        position: relative;

        display: flex;
        text-align: center;
    }

    .fz{
        font-size: 12px;
        color: black;
    }

    .bar-item {
    flex: 1;
    display: flex;
    }

    .bar-item>div {
        flex: 1;
    }

    .bar-left .text {
        font-size: 13px;
    }

    .bar-left .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 3px;
        background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    }

    .bar-left .service {
        background-position:0 -54px;
    }

    .bar-left .shop {
        background-position:0 -98px;
    }

    .bar-right {
        font-size: 15px;
        color: #fff;
        line-height: 58px;
    }

    .bar-right .cart {
        background-color: #ffe817;
        color: #333;
    }

    .bar-right .buy {
        background-color: #f69;
        font-size: 12px;
    }

    .sport-ball {
        position: absolute;
        left: 225px;
        bottom: 20px;
    }
</style>