<template>
    <div class="check-button" :class="{check:isChecked}">
        <img src="~assets/img/cart/tick.svg" alt=""/>
    </div>
</template>

<script>
export default {
    name:'CheckButton',
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
    .check-button{
        position: relative;
        margin: 0;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border:solid 2px #aaa;
    }
    img{
        position: absolute;
    }
    .check{
        border-color: orange;
        background-color: orange;
    }
</style>