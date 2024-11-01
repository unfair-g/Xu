<template>
  <Logo />
  <Loading v-if="isLoading" />
  <router-view></router-view>
</template>

<script>
import Logo from './components/WebLogo.vue'
import Loading from './components/MyLoading.vue';

export default {
  name: 'App',
  components: {
    Logo,
    Loading
  },
   data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      window.scrollTo(0, 0);
      next(); // 延迟2秒后跳转
      this.isLoading = true; // 开始加载
      setTimeout(() => {
        this.isLoading = false; // 完成加载
      }, 2000);
    });
  },
}
</script>

<style>

</style>
