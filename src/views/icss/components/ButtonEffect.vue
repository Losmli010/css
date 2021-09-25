<template>
    <h3>4、各种按钮效果</h3>
    <div class="button-effect">
        <button class="btn btn-line-move">Hover Me</button>
        <button class="btn btn-double-line-move">Hover Me</button>
        <button class="btn btn-color-move">Hover Me</button>
    </div>
</template>

<style lang="scss" scoped>
.button-effect {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .btn {
        display: inline-block;
        min-width: 160px;
        min-height: 60px;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        background-color: #F7F4ED;
        color: #525288;
    }

    .btn-line-move {
        position: relative;
        background-color: #FFFFFF;
        border: 0;

        &::after {
            position: absolute;
            content: "";
            right: 0;
            bottom: 0;
            height: 1px;
            width: 0;
            background-color: #525288;
            transition: .25s width;
        }

        &:hover::after {
            width: 100%;
            left: 0;
        }
    }

    .btn-double-line-move {
        position: relative;
        background-color: #FFFFFF;
        border: 0;

        &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            height: 1px;
            width: 160px;
            background-color: #525288;
            transform: scale3d(0, 1, 1);
            transform-origin: 0 0;
            transition: .25s transform;
        }

        &:hover::before {
            transform: scale3d(1, 1, 1);
            transform-origin: 100% 100%;
        }

        &::after {
            position: absolute;
            content: "";
            right: 0;
            bottom: 0;
            height: 1px;
            width: 0;
            background-color: #525288;
            transition: .25s width;
        }

        &:hover::after {
            width: 100%;
            left: 0;
        }
    }

    .btn-color-move {
        position: relative;
        border: 1px solid #525288;

        &::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            width: 0;
            height: 100%;
            background-color: #525288;
            transition: .25s width;
            z-index: -1;
        }

        &:hover {
            color: #F7F4ED;
            z-index: 1;

            &::after {
                left: 0;
                width: 100%;
            }
        }
    }
}
</style>