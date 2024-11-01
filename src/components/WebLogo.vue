<template>
  <img src="../assets/logo.png" class="logo">
  <img v-if="closed && !click" src="../assets/closed.png" class="menu" @click="openMenu">
  <img v-if="closed && click" src="../assets/open.gif" class="menu">
  <img v-if="opened && !click" src="../assets/opened.png" class="menu" @click="closeMenu">
  <img v-if="opened && click" src="../assets/close.gif" class="menu">
  <div class="sidebar">
    <p
       v-for="(line, index) in menu" 
      :key="index" 
      :class="{ visible: list }" 
      :style="{ transitionDelay: `${index * 0.22}s` }" 
      @click="toPage(index)"
    >
    <a>{{ line }}</a>
    </p>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      closed: true,
      click: false,
      opened: false,
      list:false,
      menu: [
        '课程一览',
        '在线插花',
        '个人中心',
        '花瓶购买',
        '关于我们',
        '返回主页',
      ],
      routers: [
        '/courses', // 课程一览的路由
        '/online-flower-arranging', // 在线插花的路由
        '/profile', // 个人中心的路由
        '/purchase', // 花瓶购买的路由
        '/aboutus', // 关于我们的路由
        '/home', // 返回主页的路由
      ]
    }
  },
  methods: {
    toPage(index) {
      this.$router.push(this.routers[index]);
      this.closeMenu()
    },
    openMenu() {
      this.click = true;
      this.list = true;
      setTimeout(() => {
        this.opened = true;
        this.closed = false;
        this.click = false;
      }, 1900);
    },
    closeMenu() {
      this.click = true;
      this.list = false;
      setTimeout(() => {
        this.closed = true;
        this.opened = false;
        this.click = false;
      }, 1400);
    }
  }
}
</script>

<style scoped>
.logo{
  position: fixed;
  width:2vw;
  top: 2vh;
  left: 1.5vw;
  z-index: 999;
}

.sidebar{
  font-family: 思源黑体 CN Normal;
  position: fixed;
  font-size: 18px;
  line-height: 52px;
  color: #5D5D5D;
  min-height: 20vh;
  top: 10vh;
  right:2.5vw;
  z-index: 999;
}

.sidebar p{
    opacity: 0; /* 每个段落初始透明 */
    transition: opacity 0.5s ease; /* 段落的动画过渡 */
}

.sidebar p.visible{
    opacity: 1; /* 可见时变为不透明 */
}

.menu{
  position: fixed;
  width:5vw;
  top: 1vh;
  right: 1.5vw;
  z-index: 999;
}

a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1.5px;
    bottom: -5px;
    left: 0;
    background-color: #5D5D5D;
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform 0.3s ease;
  }
</style>