<template>
  <div class="parallax-container">
    <div class="parallax" :style="{ backgroundPositionY: backgroundPositionY }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollY: 0,
      backgroundPositionY: '0%'
    };
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      this.backgroundPositionY = `${-this.scrollY * 0.1}px`;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.parallax-container {
  height: 50vh;
  width:40vw;
  overflow: hidden;
  position: relative;
}

.parallax {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80vh;
  width: 40vw;
  background-image: url('../assets/news-pic.png'); /* 替换为你的背景图 */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transition: background-position 0.2s ease-out;
}

.content {
  position: relative;
  z-index: 1; /* 确保内容在背景上方 */
  text-align: center;
  color: white;
}
</style>
