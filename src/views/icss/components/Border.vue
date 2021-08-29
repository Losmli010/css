<template>
    <h3>1、左边框</h3>
    <div class="border-demo">
        <div class="border">border实现</div>

        <div class="before">伪类实现</div>

        <div class="box-shadow-out">外 box-shadow 实现</div>

        <div class="box-shadow-in">内 box-shadow 实现</div>

        <div class="drop-shadow">drop-shadow 实现</div>

        <div class="linear-gradient">渐变 linearGradient 实现</div>
    </div>
</template>

<style lang="scss" scoped>
.border-demo {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .border {
        width: 200px;
        height: 60px;
        background: #F7F4ED;   // 鱼肚白
        color: #EA8958;        // 晨曦红
        text-align: center;
        line-height: 60px;

        border-left: 5px solid #8FB2C9;  // 晴山蓝
    }

    .before {
        width: 200px;
        height: 60px;
        background: #F9E9CD;  // 米色
        color: #000000;
        text-align: center;
        line-height: 60px;

        position: relative;

        &::after {
            position: absolute;
            content: "";
            width: 5px;
            height: 60px;
            left: 0;
            top: 0;
            background: #E0C8D1;  // 淡青紫
        }
    }

    .box-shadow-out {
        width: 200px;
        height: 60px;
        background: #E2D849;  // 蝶黄
        color: #000000;
        text-align: center;
        line-height: 60px;

        box-shadow: -5px 0 0 0 #4E7CA1;
    }

    .box-shadow-in {
        width: 200px;
        height: 60px;
        background: #FECC11;  // 向日葵黄
        color: #000000;
        text-align: center;
        line-height: 60px;

        box-shadow: 5px 0 0 0 #207F4C inset;  // 薄荷绿
    }

    .drop-shadow {
        width: 200px;
        height: 60px;
        background: #FBECDE;
        color: #E16C96;
        text-align: center;
        line-height: 60px;

        filter: drop-shadow(-5px 0 0 #1A6840);   // 荷叶绿
    }

    .linear-gradient {
        width: 200px;
        height: 60px;
        background: #FBECDE;
        color: #EE2746;      // 淡曙红
        text-align: center;
        line-height: 60px;

        background-image: linear-gradient(90deg, #1A6840 0, #1A6840 5px, transparent 5px);   // 荷叶绿
    }
}
</style>
