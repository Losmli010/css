<template>
    <div class="container">
        <div class="panel" v-for="(item, idx) in imgList" :key="idx" :style="{'background-image': 'url('+item.url+')'}">
            <h3>{{ item.text }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: []
        }
    },
    created() {
        this.imgList = [
            {
                url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                text: 'Explore The World'
            },
            {
                url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                text: 'Wild Forest'
            },
            {
                url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
                text: 'Sunny Beach'
            },
            {
                url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
                text: 'City on Winter'
            },
            {
                url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                text: 'Mountains Clouds'
            }
        ]
    },
    mounted() {
        const panels = document.querySelectorAll('.panel')

        panels[0].classList.add('active')
        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                panels.forEach(panel => {panel.classList.remove('active')})
                panel.classList.add('active')
            })
        })
    }
}
</script>

<style lang="scss" scoped>
.container {
    font-family: sans-serif;
    display: flex;
    justify-content: center;    /* 水平方式对齐方式 */
    align-items: center;    /* 垂直方向对齐方式 */
    height: 100vh;
    overflow: hidden;   /* 防止Safari出现水平滚动条 */
    margin: 0;
}

.panel {
    position: relative;
    flex: 0.5;
    margin: 10px;
    height: 80vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    transition: all 700ms ease-in;

    h3 {
        position: absolute;
        bottom: 20px;
        left: 20px;
        margin: 0;
        font-size: 24px;
        opacity: 0;
    }

    &.active {
        flex: 10;
    }

    &.active h3 {
        opacity: 1;
        transition: opacity 0.3s ease-in 0.4s;
    }
}

@media (max-width: 480px) {
    .container {
        width: 100vw;
    }

    .panel:nth-of-type(4),
    .panel:nth-of-type(5) {
        display: none;
    }
}
</style>