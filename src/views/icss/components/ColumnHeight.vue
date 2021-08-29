<template>
    <h3>2、多列等高布局</h3>
    <div class="demo">
        <div class="flex-demo">
            <div class="left">flex 实现</div>
            <div class="right">繁华事散逐香尘，流水无情草自春。日暮东风怨啼鸟，落花犹似坠楼人。</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flex-demo {
    width: 220px;
    display: flex;
    color: #FFFFFF;

    .left {
        width: 80px;
        text-align: center;
        background: #FEBA07;
    }
    .right {
        width: 140px;
        background: #D85916;
    }
}
</style>
