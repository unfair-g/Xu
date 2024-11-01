<template>
  <img class="left" src="../assets/white.png">
  <div class="right"></div>
  <div class="mouse-wheel-horizontal-scroll">
    <div class="mouse-wheel-wrapper" ref="scroll">
      <div class="mouse-wheel-content">
        <div class="mouse-wheel-item"></div>
        <div class="mouse-wheel-item">
          <img src="../assets/works.png" style="height:90vh">
        </div>
        <div class="mouse-wheel-item"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  import MouseWheel from '@better-scroll/mouse-wheel'

  BScroll.use(MouseWheel)

  export default {
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.bs = new BScroll(this.$refs.scroll, {
          scrollX: true,
          scrollY: false,
          mouseWheel: true
        })
      }
    }
  }
</script>

<style scoped>
.left{
  position: fixed;
  width:20vw;
  height: 50vh;
  left:20vw;
  z-index: 999;
}
</style>

<style lang="stylus" scoped>

.mouse-wheel-horizontal-scroll
  .mouse-wheel-wrapper
    width 100%
    height 80vh
    margin 0
    white-space nowrap
    overflow hidden
    .mouse-wheel-content
      display inline-block
      height 80vh
      .mouse-wheel-item
        height 80vh
        display inline-block
        padding 0 20px
</style>