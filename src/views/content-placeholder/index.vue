<template>
  <div class="card">
    <div id="header" class="card-header animated-bg">&nbsp;</div>

    <div class="card-content">
      <h3 id="title" class="card-title animated-bg animated-bg-text">&nbsp;</h3>
      <p id="excerpt" class="card-excerpt">
        &nbsp;
        <span class="animated-bg animated-bg-text">&nbsp;</span>
        <span class="animated-bg animated-bg-text">&nbsp;</span>
        <span class="animated-bg animated-bg-text">&nbsp;</span>
      </p>
      <div class="author">
        <div id="profile_img" class="profile-img animated-bg">&nbsp;</div>
        <div class="author-info">
          <strong id="name" class="animated-bg animated-bg-text">&nbsp;</strong>
          <small id="date" class="animated-bg animated-bg-text">&nbsp;</small>
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
      header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
      title.innerHTML = 'Lorem ipsum dolor sit amet'
      excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
      profile_img.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
      name.innerHTML = 'John Doe'
      date.innerHTML = 'Oct 08, 2020'

      animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
      animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
    }

    setTimeout(getData, 2500)
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 350px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  .card-header {
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-content {
    padding: 30px;
    background-color: #fff;

    .card-title {
      height: 20px;
      margin: 0;
    }

    .card-excerpt {
      margin: 10px 0 20px;
      color: #777;
    }

    .author {
      display: flex;

      .profile-img {
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;
      }

      .author-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100px;
        margin-left: 10px;

        small {
          margin-top: 5px;
          color: #aaa;
        }
      }
    }
  }
}

.animated-bg {
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 10%,
    #f6f7f8 20%,
    #f6f7f8 100%
  );
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

.animated-bg-text {
  display: inline-block;
  width: 100%;
  height: 10px;
  margin: 0;
  border-radius: 50px;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
