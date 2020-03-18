<template>
<view class="seat-content">
    <view class="tip">
        组件放置位置
    </view>
</view>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>

<style lang="scss">
.seat-content{
    height: 40px;
    border: 2px solid #155bd4;
    // border-bottom: 1px dashed #155bd4;
    display: flex;
    align-items: center;
    background: #E2EEFF;
    .tip{
        background: #155bd4;
        opacity: 0.8;
        color: #FFFFFF;
        text-align: center;
        height: 30px;
        width: 100px;
        line-height: 30px;
        margin: 0 auto;
        font-size: 12px;
    }
}

</style>