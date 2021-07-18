<template>
    <div class="card">
        <div class="card-header animated-bg" id="header">&nbsp;</div>

        <div class="card-content">
            <h3 class="card-title animated-bg animated-bg-text" id="title">
                &nbsp;
            </h3>
            <p class="card-excerpt" id="excerpt">
                &nbsp;
                <span class="animated-bg animated-bg-text">&nbsp;</span>
                <span class="animated-bg animated-bg-text">&nbsp;</span>
                <span class="animated-bg animated-bg-text">&nbsp;</span>
            </p>
            <div class="author">
                <div class="profile-img animated-bg" id="profile_img">&nbsp;</div>
                <div class="author-info">
                    <strong class="animated-bg animated-bg-text" id="name">&nbsp;</strong>
                    <small class="animated-bg animated-bg-text" id="date">&nbsp;</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const header = document.getElementById('header')
        const title = document.getElementById('title')
        const excerpt = document.getElementById('excerpt')
        const profile_img = document.getElementById('profile_img')
        const name = document.getElementById('name')
        const date = document.getElementById('date')

        const animated_bgs = document.querySelectorAll('.animated-bg')
        const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

        const getData = () => {
            header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
            title.innerHTML = 'Lorem ipsum dolor sit amet'
            excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
            profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
            name.innerHTML = 'John Doe'
            date.innerHTML = 'Oct 08, 2020'

            animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
            animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
        }

        setTimeout(getData, 2500)
    }
}
</script>

<style lang="scss" scoped>
.card {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    width: 350px;

    .card-header {
        height: 200px;

        img {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    .card-content {
        background-color: #fff;
        padding: 30px;

        .card-title {
            height: 20px;
            margin: 0;
        }

        .card-excerpt {
            color: #777;
            margin: 10px 0 20px;
        }

        .author {
            display: flex;

            .profile-img {
                border-radius: 50%;
                overflow: hidden;
                height: 40px;
                width: 40px;
            }

            .author-info {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                margin-left: 10px;
                width: 100px;
                small {
                    color: #aaa;
                    margin-top: 5px;
                }
            }
        }
    }
}

.animated-bg {
    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
    background-size: 200% 100%;
    animation: bgPos 1s linear infinite;
}

.animated-bg-text {
    border-radius: 50px;
    display: inline-block;
    margin: 0;
    height: 10px;
    width: 100%;
}

@keyframes bgPos {
    0% {
        background-position: 50% 0;
    }

    100% {
        background-position: -150% 0;
    }
}
</style>
<style>
.profile-img img,
.card-header img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}
</style>