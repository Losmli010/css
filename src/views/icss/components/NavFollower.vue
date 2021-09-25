<template>
    <h3>5、下划线跟随</h3>
    <div class="nav-follower">
        <ul>
            <li>不可思议的CSS</li>
            <li>导航栏</li>
            <li>光标小下划线跟随</li>
            <li>PURE CSS</li>
            <li>Nav Underline</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;
    display: flex;
}

li {
    position: relative;
    padding: 20px;
    font-size: 24px;
    color: #000;
    line-height: 1;
    transition: 0.2s all linear;
    cursor: pointer;
}

li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid #525288;
    transition: 0.2s all linear;
}

li:hover {
    color: #525288;
}

li:hover::before {
    width: 100%;
    top: 0;
    left: 0;
    transition-delay: 0.1s;
    border-bottom-color: #525288;
    z-index: -1;
}

li:hover ~ li::before {
    left: 0;
}
</style>