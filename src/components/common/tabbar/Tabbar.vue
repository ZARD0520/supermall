<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name:'TabBar'
}
</script>

<style>
    body{
        margin: 0;
        padding: 0;
    }
    #tab-bar{
        display: flex;
        flex-direction: row;
        text-align: center;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow:0 -1px -1px rgba(100,160,90,0.1);
        background-color: #eee;
    }
</style>