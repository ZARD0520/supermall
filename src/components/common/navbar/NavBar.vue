<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:"NavBar"
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        text-align: center;
    }
    .left,.right{
        flex:0 0 60px;
    }
    .center{
        display: flex;
        height: 100%;
        flex:1;
    }
    .center div{
        margin: auto;
        font-size: 20px;
    }
</style>