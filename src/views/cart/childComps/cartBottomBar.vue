<template>
    <div class="bottom-bar">
        <div class="check-content">
            <check-button class="check-button"
                :is-checked="isSelectAll"
                @click.native="checkClick"/>
            <span>全选</span>
        </div>
        <div class="price">
            合计:{{totalPrice}}
        </div>
        <div class="calculate" @click="calcClick">
            去计算:{{checkLength}}
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'

export default {
    name:'CartBottomBar',
    components:{
        CheckButton
    },
    computed:{
        ...mapGetters(['cartList','cartLength']),
        totalPrice(){
            const cartList = this.cartList
            return cartList.filter(item=>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        checkLength(){
            return this.cartList.filter(item=>{
                item.checked
            }).length
        },
        isSelectAll(){
            //return !(this.cartList.filter(item=>!item.checked).length)
            if(this.cartList.length === 0){
                return false
            }
            return !this.cartList.find(item=>!item.checked)
        }
    },
    methods:{
        checkClick(){
            if(this.isSelectAll){ //全部选中
                this.cartList.forEach(item => {
                    item.checked = false
                });
            }else{
                this.cartList.forEach(item=>item.checked = true)
            }
        },
        calcClick(){
            if(!this.isSelectAll){
                this.$toast.show('请选择购买的商品',1000)
            }
        }
    }
}
</script>

<style scoped>
    .bottom-bar{
        position: fixed;
        display: flex;

        bottom:49px;
        left:0;
        height: 44px;
        width: 100%;

        background-color: #eee;
        line-height: 44px;
        font-size: 14px;
    }
    
    .check-content{
        display: flex;
        align-items: center;
        width: 100px;
    }

    .check-content span{
        margin-left: 6px;
        width: 60px;
        font-size: 10px;
    }

    .check-button{
        height: 20px;
        line-height: 20px;
    }

    .price{
        font-size: 6px;
        padding-left:10px;
        flex:1;
    }

    .calculate{
        font-size: 10px;
        float: right;
        width: 90px;
        background-color: orange;
    }

</style>