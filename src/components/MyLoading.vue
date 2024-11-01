<!-- Loading.vue -->
<template>
  <div class="loading-overlay">
    <img src="../assets/loading.gif" style="width:150px">
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white; /* 背景为白色 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 确保在最上层 */
}

.loading-spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #5D5D5D; /* 自定义颜色 */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
